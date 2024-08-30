import { Router } from 'express';
import { uploadController } from '@/controllers/upload.controller';

const uploadRouter = Router();

uploadRouter.post('/', uploadController.uploadImage); // validateBody(betsSchema), controller

export default uploadRouter;
