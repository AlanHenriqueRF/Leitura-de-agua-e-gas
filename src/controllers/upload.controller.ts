import { Request, Response } from 'express';
import { uploadService } from '../service/upload.service';

async function uploadImage(req: Request, res: Response) {
  const body = req.body;

  const upload = await uploadService.uploadImage(body);

  const response = {
    image_url: upload.image_url,
    measure_value: upload.measure_value,
    measure_uuid: upload.measure_uuid,
  };

  res.status(200).send(response);
}

export const uploadController = {
  uploadImage,
};
