import { Request, Response, NextFunction } from 'express';
import { AUTH_COOKIE_NAME } from '../../common/constants';

export default function (req: Request, _res: Response, next: NextFunction) {
  // dummy authentication
  const err =
    process.env.NODE_ENV === 'test' || req.cookies[AUTH_COOKIE_NAME]
      ? null
      : 'no access';
  next(err);
}
