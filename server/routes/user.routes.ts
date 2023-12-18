import express from 'express';

import controller from '../controllers/user.controller'
import auth from '../middlewares/verifyAuth'

const router = express.Router();

router.get("/tickets",
  [
    auth.verifyToken
  ],
  controller.getTickets
);

export default router;