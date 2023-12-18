import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

import database from '../models'
const User = database.user;

// ENV variables
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

// Types
interface AuthenticatedRequest extends Request {
  userId?: string;
}

// verify token
function verifyToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const token = req.session!.token;

    if (!token || !(typeof token === 'string')) {
      return res.status(401).send({
        message: "The token is missing",
      });
    }

    jwt.verify(token, JWT_SECRET!, (err: jwt.VerifyErrors | null, decoded: any) => {
      if (err || !decoded || !decoded.id) {
        return res.status(401).send({
          message: "The token has expired",
        });
      }
      req.userId = decoded.id;
      next();
    });
  } catch(err: any) {
    res.status(500).send({ message: err.message || "Some error occurred during the token verification." });
  }
}

// is admin
async function isAdmin(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const user = await User.findById(req.userId)

    if (!user || !user.role) {
      res.status(403).send({ message: "User role is missing" });
      return;
    }

    if (user.role === "admin") {
      next();
      return;
    } else {
      res.status(403).send({ message: "Require Admin Role!" });
      return;
    }

  } catch(err: any) {
    res.status(500).send({ message: err.message || "Some error occurred while checking admin role." });
  }
}

export default { verifyToken, isAdmin };