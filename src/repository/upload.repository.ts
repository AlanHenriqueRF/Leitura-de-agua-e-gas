import { Prisma } from '@prisma/client';
import { prisma } from '../config';

async function createUpload(data: Prisma.LeiturasCreateInput) {
  return prisma.leituras.create({ data });
}

async function findUploadByImageAndDate(client: string, datetimeInput: Date | string, image: string) {
  const datetime = new Date(datetimeInput);

  const startOfMonth = new Date(datetime.getFullYear(), datetime.getMonth(), 1);
  const endOfMonth = new Date(datetime.getFullYear(), datetime.getMonth() + 1, 1);

  return prisma.leituras.findFirst({
    where: {
      customer_code: client,
      image_url: image,
      measure_datetime: {
        gte: startOfMonth,
        lt: endOfMonth,
      },
    },
  });
}

export const uploadRpository = {
  createUpload,
  findUploadByImageAndDate,
};
