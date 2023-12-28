import mongoose, { Document, Model, Schema, Types } from 'mongoose';
import { IScreening } from './screening.model';
import { IUser } from './user.model';

interface ITicket {
  rate: "Adulte" | "Étudiant" | "Réduit",
  amount: number
}

interface ISnack {
  name: string,
  amount: number
}

interface IBooking extends Document {
  screening_id: Types.ObjectId | IScreening,
  user_id: Types.ObjectId | IUser,
  seats: string[],
  qr_code: string,
  tickets: ITicket[],
  snacks: ISnack[],
  price: number
}

const TicketSchema = new Schema({
  rate: {
    type: String,
    enum: ["Adulte", "Étudiant", "Réduit"]
  },
  amount: Number
})

const SnackSchema = new Schema({
  name: String,
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
  snacks: [SnackSchema],
  price: Number
});

const Booking: Model<IBooking> = mongoose.model<IBooking>('Booking', BookingSchema);

export { IBooking, Booking }