import { Request, Response } from 'express';
import { AuthenticatedRequest } from '../interfaces/AuthenticatedRequest';
import { createCheckoutSession, checkPaymentStatus } from '../services/stripe.services';
import { sendConfirmationEmail } from '../services/email.services'
import database from '../models';
const Booking = database.booking;

// Create a new booking
async function createBooking(req: Request, res: Response) {
  try {
    const booking = new Booking({
      screening_id: req.body.screening_id,
      seats: req.body.seats,
      tickets: req.body.tickets,
      price: req.body.price,
      payment_status: false,
      created_dt: Date.now()
    });

    const savedBooking = await booking.save();
    savedBooking.qr_code = `https://api.qrserver.com/v1/create-qr-code/?data=${savedBooking._id}&size=200x200&bgcolor=161616&color=ffffff`;
    await savedBooking.save();

    res.status(200).json({booking_id: savedBooking._id.toString()})
  } catch (err: any) {
    res.status(500).send({ message: err });
  }
}

// Get booking
async function getBooking(req: Request, res: Response) {
  try {
    const bookingId = req.params.id
    const booking = await Booking.findById(bookingId)

    res.status(200).json({booking})
  } catch (err: any) {
    res.status(500).send({ message: err });
  }
}

// Create Stripe checkout session
async function checkout(req: AuthenticatedRequest, res: Response) {
  try {
    const userId = req.userId
    const bookingId = req.body.booking_id
    const booking = await Booking.findById(bookingId)
    
    const stripeSession = await createCheckoutSession(booking!.tickets, bookingId, req.body.success_url, req.body.cancel_url)
    
    await Booking.findOneAndUpdate({ _id: bookingId }, { $set: { stripe_session_id: stripeSession.id, user_id: userId } });
    
    res.status(200).json({url: stripeSession.url})
  } catch (err: any) {
    res.status(500).send({ message: err });
  }
}

// Check if payment is ok and send confirmation email
async function validateBooking(req: AuthenticatedRequest, res: Response) {
  try {
    const bookingId = req.params.id
    const booking = await Booking.findById(bookingId)

    const isPaymentValid = await checkPaymentStatus(booking?.stripe_session_id)
    
    let emailSent = false
    
    if (isPaymentValid && booking && booking.payment_status == false) {
      await Booking.findOneAndUpdate({ _id: bookingId }, { $set: { payment_status: true } });

      try {
        emailSent = await sendConfirmationEmail(booking)
      } catch (err: any) {
        throw new Error(err)
      }
    }

    res.status(200).send({ message: "Booking payment was verified.", isPaymentValid, emailSent });
      
  } catch (err: any) {
    res.status(500).send({ message: err });
  }
}

export default { createBooking, checkout, validateBooking, getBooking }