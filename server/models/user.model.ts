import mongoose, { Document, Model, Schema } from 'mongoose';

interface IUser extends Document {
  email: string,
  password: string,
  firstname: string,
  lastname: string,
  birthdate: Date,
  gender: "M" | "F" | "X",
  role: "admin" | "user"
}

const UserSchema = new Schema({
  email: String,
  password: String,
  firstname: String,
  lastname: String,
  birthdate: Date,
  gender: {
    type: String,
    enum: ["M", "F", "X"]
  },
  role: String
});

const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);

export { IUser, User }