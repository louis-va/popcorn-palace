import { Request, Response, NextFunction } from 'express';

import database from '../models'
const Screening = database.screening;

// Check if date + time already exist for a screening
async function checkDate(req: Request, res: Response, next: NextFunction) {
  try {
    const screening = await Screening.findOne({ date: req.body.date })

    if (screening) {
      res.status(400).send({ message: "This date has already been used for another screening." });
      return;
    }

    next();
    return;
  } catch(err: any) {
    res.status(500).send({ message: err.message || "Some error occurred while validating the screening's date." });
  }
}

// Check if screening exists
async function checkScreeningId(req:Request, res: Response, next: NextFunction) {
  try {
    const screeningId = (req.params.id) ? req.params.id : req.body.screening_id
    const screening = await Screening.findById(screeningId)

    if (!screening) {
      res.status(403).send({ message: "Invalid Screening ID" });
      return;
    }

    next();
    return;
  } catch(err: any) {
    if (err.name === "CastError") {
      res.status(404).json({ error: 'Invalid Screening ID' });
      return;
    }
    res.status(500).send({ message: err.message || "Some error occurred while checking admin role." });
  }
}

export default { checkDate, checkScreeningId };