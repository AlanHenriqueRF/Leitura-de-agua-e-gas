import { Request, Response, NextFunction } from 'express';
import { ApplicationError, RequestError } from '@/protocols';

export function handleApplicationErrors(
  err: RequestError | ApplicationError | Error,
  _req: Request,
  res: Response,
  next: NextFunction,
) {

  if (err.name === 'INVALID_DATA') {
    return res.status(400).send({
      error_code: err.name,
      error_description: err.message,
    });
  }

  if (err.name === 'DOUBLE_REPORT') {
    return res.status(409).send({
      error_code: err.name,
      error_description: err.message,
    })
  }

  res.status(500).send({
    error: 'InternalServerError',
    message: 'Internal Server Error',
  });
}
