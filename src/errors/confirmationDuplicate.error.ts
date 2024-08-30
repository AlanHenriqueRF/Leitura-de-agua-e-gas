import { ApplicationError } from '../protocols';

export function confirmationDuplicateError(): ApplicationError {
  return {
    name: 'CONFIRMATION_DUPLICATE',
    message: 'Leitura do mês já realizada',
  };
}
