import { Prisma } from '@prisma/client';
import { prisma } from '../config';
import { ConfirmType } from '../protocols';

async function getListAll(customerCode: string) {
  return prisma.leituras.findMany<Prisma.LeiturasFindManyArgs>({
    where: {
      customer_code: customerCode,
    },
  });
}

async function getListByMesureType(data: ConfirmType) {
  return prisma.leituras.update({
    where: { measure_uuid: data.measure_uuid },
    data: { measure_value: data.confirmed_value, has_confirmed: true },
  });
}

export const customerRepository = {
  getListAll,
  getListByMesureType,
};
