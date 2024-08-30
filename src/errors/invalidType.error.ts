import { ApplicationError } from '../protocols';

export function invalidTypeError(): ApplicationError {
  return {
    name: 'INVALID_TYPE',
    message: `Tipo de medição não permitida`,
  };
}
