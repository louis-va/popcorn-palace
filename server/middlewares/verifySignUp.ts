import { Request, Response, NextFunction } from 'express';

import { User } from '../models/user.model';

async function checkDuplicateEmail(req: Request, res: Response, next: NextFunction) {
  try {
    const existingUser = await User.findOne({ email: req.body.email })
  
    if (existingUser) {
      res.status(400).send({ message: "Failed! Email is already in use!" });
      return;
    }
    next();
  } catch(err: any) {
    res.status(500).send({ message: err.message || "Some error occurred while checking email duplication." });
  }
}

function checkExistRole (req: Request, res: Response, next: NextFunction) {
  const USER_ROLES = ["user", "admin"]

  if (req.body.roles) {
    if (!USER_ROLES.includes(req.body.role)) {
      res.status(400).send({
        message: `Failed! Role ${req.body.role} does not exist!`
      });
      return;
    }
  }
  next();
}

export default { checkDuplicateEmail, checkExistRole };