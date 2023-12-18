import { Response } from 'express';

import { AuthenticatedRequest } from '../interfaces/AuthenticatedRequest';
import database from '../models';
const Booking = database.booking;

// Get one screening
async function getTickets(req: AuthenticatedRequest, res: Response) {
  try {
    const tickets = await Booking.find({ user_id: req.userId })

    res.status(200).send(tickets);
  } catch (err: any) {
    res.status(500).send({ message: err });
  }
}

export default { getTickets }