import mongoose, { Document, Model, Schema } from 'mongoose';

interface IUser extends Document {
  email: string,
  password: string,
  firstname: string,
  lastname: string,
  role: "admin" | "user"
}

const UserSchema = new Schema({
  email: String,
  password: String,
  firstname: String,
  lastname: String,
  role: String
});

const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);

export { IUser, User }