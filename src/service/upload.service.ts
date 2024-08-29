import { UploadImage } from '@/protocols';
import { uploadRpository } from '@/repository/upload.repository';
import { Prisma } from '@prisma/client';

async function uploadImage(body: UploadImage) {
  const checkUpload = await uploadRpository.findUploadByImage(body.image)// checkLeitura(data., data.amountBet);
  console.log(checkUpload)
  if (!checkUpload) {
    console.log('conflito 409')
  } 

  const data: Prisma.LeiturasCreateInput = {
    customer_code: body.customer_code,
    measure_type: body.measure_type,
    measure_value: 0,
    image_url: body.image,
    measure_datetime: body.measure_datetime
  }

  const leitura = await uploadRpository.createUpload(data);

  return leitura;
}

export const uploadService = {
  uploadImage,
};


