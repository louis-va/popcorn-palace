import { Request } from 'express';

interface AuthenticatedRequest extends Request {
  userId?: string;
}

export { AuthenticatedRequest }