import { Request, Response } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import { AuthenticatedRequest } from '../interfaces/AuthenticatedRequest';
import database from '../models';
const User = database.user;

// ENV variables
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

// Sign Up
async function signUp(req: Request, res: Response) {
  try {
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      role: "user"
    });

    await user.save();

    res.status(200).send({ message: "User was registered successfully!" });
  } catch (err) {
    res.status(500).send({ message: err });
  }
}

// Sign In
async function signIn(req: Request, res: Response) {
  try {
    const user = await User.findOne({ email: req.body.email })
      
    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }
  
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
  
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      });
    }
  
    const token = jwt.sign(
      { id: user.id },
      JWT_SECRET!,
      {
        algorithm: 'HS256',
        allowInsecureKeySizes: true,
        expiresIn: 2592000, // 30 days
      }
    );

    req.session!.token = token

    res.status(200).send({
      id: user._id,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      role: user.role
    });
  } catch(err) {
    res.status(500).send({ message: err });
    return;
  }
}

// Sign Out
async function signOut(req: Request, res: Response) {
  try {
    req.session = null;
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    res.status(500).send({ message: err });
  }
}

// Refresh
async function refresh(req: AuthenticatedRequest, res: Response) {
  try {
    const user = await User.findById(req.userId)

    if (!user) {
      res.status(500).send({ message: "User not found" });
      return;
    }

    res.status(200).send({
      id: user._id,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      role: user.role
    });
  } catch (err) {
    res.status(500).send({ message: err });
  }
}

export default { signUp, signIn, signOut, refresh }