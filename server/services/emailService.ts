import { Resend } from "resend";
import dotenv from 'dotenv';

import { IBooking } from '../models/booking.model';
import { confirmationEmail } from "../templates/confirmationEmail";
import database from '../models';
const Screening = database.screening;
const User = database.user;

// ENV variables
dotenv.config();
const RESEND_API_KEY = process.env.RESEND_API_KEY;

// Send confirmation email
async function sendConfirmationEmail(booking: IBooking) {
  try {
    const resend = new Resend(RESEND_API_KEY);

    const user = await User.findById(booking.user_id.toString());
    const screening = await Screening.findById(booking.screening_id.toString());

    if(!user || !screening) return false;

    const day = screening.date.getDay();
    const month = screening.date.getMonth() + 1;
    const time = screening.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const emailData = {
      firstname: user.firstname,
      movieTitle: screening.movie.title, 
      moviePoster: screening.movie.backdrop,
      date: day + "/" + month, 
      time: time, 
      tickets: booking.tickets.length,
      qrCode: booking.qr_code
    }

    const data = await resend.emails.send({
      from: "Brussels Rooftop Movies <no-reply@brm.lou-va.com>",
      to: [user.email],
      subject: `Votre ticket pour ${screening.movie.title}`,
      html: confirmationEmail(emailData),
    });

    console.log(data)

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export { sendConfirmationEmail }