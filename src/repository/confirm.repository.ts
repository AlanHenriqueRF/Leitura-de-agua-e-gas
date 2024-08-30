import { prisma } from '../config';
import { ConfirmType } from '../protocols';

async function findConfirmByMeasureUuid(measure_uuid: string) {
  return prisma.leituras.findFirst({
    where: {
      measure_uuid,
    },
  });
}

async function updateConfirm(data: ConfirmType) {
  return prisma.leituras.update({
    where: { measure_uuid: data.measure_uuid },
    data: { measure_value: data.confirmed_value, has_confirmed: true },
  });
}

export const confirmRpository = {
  findConfirmByMeasureUuid,
  updateConfirm,
};
