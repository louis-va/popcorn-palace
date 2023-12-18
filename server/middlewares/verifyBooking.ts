import { Request, Response, NextFunction } from 'express';

import database from '../models'
const Booking = database.booking;

// Validate seats
function validateSeats(req:Request, res: Response, next: NextFunction) {
  try {
    const seats = req.body.seats
    const regex = /^[A-H]([1-9]|10|11)$/; // Regular expression to match seats criteria
  
    for (let i = 0; i < seats.length; i++) {
      if (!regex.test(seats[i])) {
        res.status(400).send({ message: `Invalid seat: ${seats[i]}` });
        return;
      }
    }

    next();
    return;
  } catch(err: any) {
    res.status(500).send({ message: err.message || "Some error occurred while validating seats." });
  }
}

// Check seats disponibility
async function checkSeatsDisponibility(req:Request, res: Response, next: NextFunction) {
  try {
    const seats = req.body.seats
  
    const booking = await Booking.findOne({ seats: { $in: seats } })
    
    if (booking) {
      res.status(400).send({ message: `One of the seats is already taken` });
      return;
    }

    next();
    return;

  } catch(err: any) {
    res.status(500).send({ message: err.message || "Some error occurred while checking seats disponibility." });
  }
}

export default { validateSeats, checkSeatsDisponibility };