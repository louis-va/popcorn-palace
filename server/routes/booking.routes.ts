import express from 'express';

import controller from '../controllers/booking.controller'
import auth from '../middlewares/verifyAuth'
import verifyScreening from '../middlewares/verifyScreening';
import verifyBooking from '../middlewares/verifyBooking';

const router = express.Router();

router.post("/add",
  [
    auth.verifyToken,
    verifyScreening.checkScreeningId,
    verifyBooking.validateSeats,
    verifyBooking.checkSeatsDisponibility
  ],
  controller.addBooking
);

export default router;