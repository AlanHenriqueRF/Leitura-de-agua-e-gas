import { ApplicationError } from '../protocols';

export function doubleReportError(): ApplicationError {
  return {
    name: 'DOUBLE_REPORT',
    message: 'Leitura do mês já realizada',
  };
}
