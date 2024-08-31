import { Prisma } from '@prisma/client';
import { UploadImage } from '../protocols';
import { uploadRpository } from '../repository/upload.repository';
import { gemini } from '../utils/gemini';
import { doubleReportError } from '../errors/doubleReport.error';
import { saveBase64Image } from '../utils/transformBas64ToJpg';

async function uploadImage(body: UploadImage) {
  const checkUpload = await uploadRpository.findUploadByImageAndDate(
    body.measure_type.toLocaleLowerCase(),
    body.measure_datetime,
  );
  if (checkUpload) throw doubleReportError();

  const imagePath = await saveBase64Image(
    body.image,
    body.measure_type.toLocaleLowerCase() + '_' + body.customer_code + '_' + body.measure_datetime + '.jpg',
  );
  const temporaryLink = await gemini.getTemporaryLink(imagePath.outputPath, imagePath.outputFilename);

  const prompt = `Descreva o valor visto na imagem da leitura de consumo de agua ou gas, porém apenas me retorne somente o valor, sem nenhum, texto e sem nenhuma unidade de medida`;
  const measure_value = await gemini.getMeasureValue(temporaryLink, prompt);

  const data: Prisma.LeiturasCreateInput = {
    customer_code: body.customer_code,
    measure_type: body.measure_type.toLowerCase(),
    measure_value: parseInt(measure_value) ? parseInt(measure_value) : 0,
    image_url: temporaryLink,
    measure_datetime: body.measure_datetime,
  };

  const leitura = await uploadRpository.createUpload(data);

  return leitura;
}

export const uploadService = {
  uploadImage,
};
