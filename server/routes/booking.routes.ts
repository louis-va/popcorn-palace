import express from 'express';
import controller from '../controllers/booking.controller'
import auth from '../middlewares/verifyAuth'
import verifyScreening from '../middlewares/verifyScreening';
import verifyBooking from '../middlewares/verifyBooking';

const router = express.Router();

router.post("/create",
  [
    verifyScreening.checkScreeningId,
    verifyBooking.validateSeats,
    verifyBooking.checkSeatsDisponibility
  ],
  controller.createBooking
);

router.get("/:id",
  [
    verifyBooking.checkBookingId
  ],
  controller.getBooking
);

router.post("/checkout",
  [
    auth.verifyToken,
    verifyBooking.checkBookingId
  ],
  controller.checkout
);

router.get("/status/:id",
  [
    auth.verifyToken,
    verifyBooking.checkStripeSessionId
  ],
  controller.validateBooking
);

export default router;