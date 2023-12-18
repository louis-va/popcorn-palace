import express from 'express';

import validateSignUp from '../middlewares/verifySignUp';
import controller from '../controllers/auth.controller'
import auth from '../middlewares/verifyAuth'

const router = express.Router();

router.post("/signup",
  [
    validateSignUp.checkDuplicateEmail,
    validateSignUp.checkExistRole
  ],
  controller.signUp
);

router.post("/signin",
  controller.signIn
);

router.post("/signout",
  controller.signOut
);

router.post("/refresh",
  [auth.verifyToken],
  controller.refresh
);

export default router;