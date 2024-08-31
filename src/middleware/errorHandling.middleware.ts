import { Request, Response, NextFunction } from 'express';
import { ApplicationError, RequestError } from '../protocols';

export function handleApplicationErrors(
  err: RequestError | ApplicationError | Error,
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  const objError = {
    error_code: err.name,
    error_description: err.message,
  }

  if (err.name === 'INVALID_DATA' || err.name === 'INVALID_TYPE') {
    return res.status(400).send(objError);
  }

  if (err.name === 'MEASURE_NOT_FOUND') {
    return res.status(404).send(objError)
  }

  if (err.name === 'DOUBLE_REPORT' || err.name === 'CONFIRMATION_DUPLICATE') {
    return res.status(409).send(objError)
  }
  
  res.status(500).send({
    error: 'InternalServerError',
    message: 'Internal Server Error',
  });
}
