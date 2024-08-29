import { uploadService } from '@/service/upload.service';
import { Request, Response } from 'express';

async function uploadImage(req: Request, res: Response) {
  const body = req.body;

  const upload = await uploadService.uploadImage(body);

  res.status(201).send(upload);
}

export const uploadController = {
  uploadImage,
};
