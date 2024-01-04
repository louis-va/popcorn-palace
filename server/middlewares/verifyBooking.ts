import { Request, Response, NextFunction } from 'express';

import database from '../models'
const Booking = database.booking;

// Validate seats
function validateSeats(req:Request, res: Response, next: NextFunction) {
  try {
    const seats = req.body.seats
    const regex = /^[A-K]([1-9])$/; // Regular expression to match seats criteria
  
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
    const screeningId = req.body.screening_id
  
    const booking = await Booking.findOne({
      seats: { $in: seats },
      screening_id: screeningId,
      payment_status: true
    })
    
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

// Check if booking exists
async function checkBookingId(req:Request, res: Response, next: NextFunction) {
  try {
    const bookingId = req.params.id
    const booking = await Booking.findById(bookingId)

    if (!booking || !booking.stripe_session_id) {
      res.status(403).send({ message: "Invalid Booking ID" });
      return;
    }

    next();
    return;
  } catch(err: any) {
    if (err.name === "CastError") {
      res.status(403).json({ error: 'Invalid Booking ID' });
      return;
    }
    res.status(500).send({ message: err.message || "Some error occurred while validating booking Id." });
  }
}

export default { validateSeats, checkSeatsDisponibility, checkBookingId };