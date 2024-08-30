import { ApplicationError } from '../protocols';

export function confirmationDuplicate(): ApplicationError {
  return {
    name: 'CONFIRMATION_DUPLICATE',
    message: 'Leitura do mês já realizada',
  };
}
