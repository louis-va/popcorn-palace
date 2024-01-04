import { Response } from 'express';
import { AuthenticatedRequest } from '../interfaces/AuthenticatedRequest';
import { IBooking } from '../models/booking.model';
import { createCheckoutSession, checkPaymentStatus } from '../services/stripe.services';
// import { sendConfirmationEmail } from '../services/emailService'
import database from '../models';
const Booking = database.booking;

// Create a new booking
async function addBooking(booking: IBooking): Promise<string> {
  try {
    const savedBooking = await booking.save();
    savedBooking.qr_code = `https://api.qrserver.com/v1/create-qr-code/?data=${savedBooking._id}&size=200x200&bgcolor=F4F4F4`;
    await savedBooking.save();
    
    return savedBooking._id.toString();
  } catch (err: any) {
    throw new Error(err);
  }
}

// Create a new booking
async function createBooking(req: AuthenticatedRequest, res: Response) {
  try {
    const booking = new Booking({
      screening_id: req.body.screening_id,
      user_id: req.userId,
      seats: req.body.seats,
      tickets: req.body.tickets,
      price: req.body.price,
      payment_status: false
    });

    const bookingId = await addBooking(booking)
    const stripeSession = await createCheckoutSession(booking.tickets, bookingId, req.body.success_url, req.body.cancel_url)
    
    await Booking.findOneAndUpdate({ _id: bookingId }, { $set: { stripe_session_id: stripeSession.id } });

    res.redirect(303, stripeSession.url!);
  } catch (err: any) {
    res.status(500).send({ message: err });
  }
}

// Create a new booking
async function validateBooking(req: AuthenticatedRequest, res: Response) {
  try {
    const bookingId = req.body.booking_id
    const booking = await Booking.findById(bookingId)
    if (!booking || !booking.stripe_session_id) {
      throw new Error('Invalid booking')
    }

    const isPaymentValid = await checkPaymentStatus(booking?.stripe_session_id)
    
    let emailSent = false
    
    if (isPaymentValid) {
      await Booking.findOneAndUpdate({ _id: bookingId }, { $set: { payment_status: true } });

      try {
        emailSent = true // const emailSent = await sendConfirmationEmail(booking)
      } catch (err: any) {
        throw new Error(err)
      }
    }

    res.status(200).send({ message: "Booking payment was verified.", isPaymentValid, emailSent });
      
  } catch (err: any) {
    res.status(500).send({ message: err });
  }
}

export default { createBooking, validateBooking }