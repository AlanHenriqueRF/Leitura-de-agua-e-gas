import { ApplicationError } from '../protocols';

export function measureNotFound(): ApplicationError {
  return {
    name: 'MEASURE_NOT_FOUND',
    message: 'Nenhuma leitura encontrada',
  };
}

//'Leitura do mês já realizada'