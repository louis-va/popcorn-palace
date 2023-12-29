import { Response } from 'express';

import { AuthenticatedRequest } from '../interfaces/AuthenticatedRequest';
// import { sendConfirmationEmail } from '../services/emailService'
import database from '../models';
const Booking = database.booking;

// Create a new booking
function addBooking(req: AuthenticatedRequest, res: Response) {
  try {
    const booking = new Booking({
      screening_id: req.body.screening_id,
      user_id: req.userId,
      seats: req.body.seats,
      tickets: req.body.tickets,
      price: req.body.price
    });

    booking.save()
      .then(booking => {
        booking.qr_code = `https://api.qrserver.com/v1/create-qr-code/?data=${booking._id}&size=200x200&bgcolor=F4F4F4`;
        booking.save()
      })
      .then(async () => {
        // const emailSent = await sendConfirmationEmail(booking)
        const emailSent = 1
        res.status(200).send({ message: "Booking was created successfully!", emailSent });
      })
      .catch(error => {
        res.status(500).send({ message: error });
      });
  } catch (err: any) {
    res.status(500).send({ message: err });
  }
}

export default { addBooking }