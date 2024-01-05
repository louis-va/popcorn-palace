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
  
    // check seats in bookings with valid payment
    const paidBooking = await Booking.findOne({
      seats: { $in: seats },
      screening_id: screeningId,
      payment_status: true
    })

    // check seats in 15 minutes locked bookings
    const lockedBooking = await Booking.findOne({
      seats: { $in: seats },
      screening_id: screeningId,
      payment_status: false,
      created_dt: { $gte: new Date(Date.now() - 15 * 60 * 1000) }
    })
    
    if (paidBooking || lockedBooking) {
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
    const bookingId = (req.params.id) ? req.params.id : req.body.booking_id
    const booking = await Booking.findById(bookingId)

    if (!booking) {
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

// Check if booking exists
async function checkStripeSessionId(req:Request, res: Response, next: NextFunction) {
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

export default { validateSeats, checkSeatsDisponibility, checkBookingId, checkStripeSessionId };