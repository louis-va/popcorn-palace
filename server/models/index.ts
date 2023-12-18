import mongoose, { Mongoose, Model } from 'mongoose';

import { IUser, User } from "./user.model";
import { IScreening, Screening } from './screening.model';
import { IBooking, Booking } from './booking.model';

mongoose.Promise = global.Promise;

interface Database {
    mongoose: Mongoose;
    user: Model<IUser>;
    screening: Model<IScreening>;
    booking: Model<IBooking>;
}

const database: Database = {
    mongoose: mongoose,
    user: User,
    screening: Screening,
    booking: Booking
};

export default database;
