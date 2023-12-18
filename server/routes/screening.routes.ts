import express from 'express';

import controller from '../controllers/screening.controller'
import verifyScreening from '../middlewares/verifyScreening'
import auth from '../middlewares/verifyAuth'

const router = express.Router();

router.post("/add",
  [
    auth.verifyToken, 
    auth.isAdmin, 
    verifyScreening.checkDate 
  ],
  controller.addScreening
);

router.get("/",
  controller.getAllScreenings
);

router.get("/genres",
  controller.getGenres
);

router.get("/dates",
  controller.getDates
);

router.get("/:id",
  [
    verifyScreening.checkScreeningId
  ],
  controller.getOneScreening
);

export default router;