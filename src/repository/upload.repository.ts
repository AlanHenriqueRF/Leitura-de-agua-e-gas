import { Prisma } from '@prisma/client';
import { prisma } from '@/config';

async function createUpload(data: Prisma.LeiturasCreateInput) {
  return prisma.leituras.create({ data });
}

async function findUploadByImage(image: string) {
  return prisma.leituras.findFirst({
    where: { image_url: image },
  });
}


export const uploadRpository = {
  createUpload,
  findUploadByImage,
};