import { Resend } from "resend";
import dotenv from 'dotenv';

import { IBooking } from '../models/booking.model';
import { confirmationEmail } from "../templates/confirmationEmail";
import database from '../models';
const Screening = database.screening;
const User = database.user;
import { formatDateToDDMM, formatTimeToHHMM } from "../utils/date.helpers";

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

    const emailData = {
      firstname: user.firstname,
      movieTitle: screening.movie.title, 
      moviePoster: screening.movie.backdrop,
      date: formatDateToDDMM(screening.date), 
      time: formatTimeToHHMM(screening.date), 
      tickets: booking.seats.length,
      qrCode: booking.qr_code,
      seats: booking.seats.join(', ')
    }

    const data = await resend.emails.send({
      from: "Popcorn Palace <no-reply@popcorn-palace.lou-va.com>",
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