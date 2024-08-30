import { ApplicationError } from '@/protocols';

export function invalidDataError(description: string): ApplicationError {
  return {
    name: 'INVALID_DATA',
    message: `${description}`,
  };
}
