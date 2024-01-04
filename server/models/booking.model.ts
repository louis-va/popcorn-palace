import mongoose, { Document, Model, Schema, Types } from 'mongoose';
import { IScreening } from './screening.model';
import { IUser } from './user.model';

interface ITicket {
  rate: "Normal" | "Étudiant" | "Réduit",
  amount: number
}

interface IBooking extends Document {
  screening_id: Types.ObjectId | IScreening,
  user_id: Types.ObjectId | IUser,
  seats: string[],
  qr_code: string,
  tickets: ITicket[],
  price: number,
  payment_status: boolean,
  stripe_session_id: string
}

const TicketSchema = new Schema({
  rate: {
    type: String,
    enum: ["Normal", "Étudiant", "Réduit"]
  },
  amount: Number
})

const BookingSchema = new Schema({
  screening_id: {
    type: Schema.Types.ObjectId,
    ref: 'Screening'
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  seats: [String],
  qr_code: String,
  tickets: [TicketSchema],
  price: Number,
  payment_status: Boolean,
  stripe_session_id: String
});

const Booking: Model<IBooking> = mongoose.model<IBooking>('Booking', BookingSchema);

export { ITicket, IBooking, Booking }