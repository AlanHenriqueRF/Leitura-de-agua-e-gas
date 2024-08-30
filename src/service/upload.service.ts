import { UploadImage } from '@/protocols';
import { uploadRpository } from '@/repository/upload.repository';
import { gemini } from '@/utils/gemini';
import { Prisma } from '@prisma/client';

async function uploadImage(body: UploadImage) {
    const checkUpload = await uploadRpository.findUploadByImage(body.image);

    if (checkUpload) {
        console.log('conflito 409')
    }

    const prompt = "Descreva o valor visto na imagem da leitura de consumo de agua ou gas, porém apenas me retorne somente o valor, sem nenhum, texto e sem nenhuma unidade de medida";
    let measure_value = await gemini.getMeasureValue(body.image, prompt);

    const data: Prisma.LeiturasCreateInput = {
      customer_code: body.customer_code,
      measure_type: body.measure_type,
      measure_value: parseInt(measure_value)? parseInt(measure_value): 0,
      image_url: 'data:image/jpeg;base64,' + body.image,
      measure_datetime: body.measure_datetime
    }
    
    const leitura = await uploadRpository.createUpload(data);

    return leitura;
}

export const uploadService = {
    uploadImage,
};


