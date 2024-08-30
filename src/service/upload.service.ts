import { Prisma } from '@prisma/client';
import { UploadImage } from '../protocols';
import { uploadRpository } from '../repository/upload.repository';
import { gemini } from '../utils/gemini';
import { doubleReportError } from '../errors/doubleReport.error';

async function uploadImage(body: UploadImage) {
  const checkUpload = await uploadRpository.findUploadByImageAndDate(
    body.customer_code,
    body.measure_datetime,
    'data:image/jpeg;base64,' + body.image,
  );

  if (checkUpload) throw doubleReportError();

  const prompt = `Descreva o valor visto na imagem da leitura de consumo de agua ou gas, porém apenas me retorne somente o valor, sem nenhum, texto e sem nenhuma unidade de medida`;
  const measure_value = await gemini.getMeasureValue(body.image, prompt);

  const data: Prisma.LeiturasCreateInput = {
    customer_code: body.customer_code,
    measure_type: body.measure_type.toLowerCase(),
    measure_value: parseInt(measure_value) ? parseInt(measure_value) : 0,
    image_url: 'data:image/jpeg;base64,' + body.image,
    measure_datetime: body.measure_datetime,
  };

  const leitura = await uploadRpository.createUpload(data);

  return leitura;
}

export const uploadService = {
  uploadImage,
};
