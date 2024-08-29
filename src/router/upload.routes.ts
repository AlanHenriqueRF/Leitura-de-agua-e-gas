import { uploadController } from '@/controllers/upload.controller';
import { Router } from 'express';

const uploadRouter = Router();

uploadRouter.post('/', uploadController.uploadImage); // validateBody(betsSchema), controller

export default uploadRouter;
