import { Router } from 'express';
import { uploadController } from '../controllers/upload.controller';
import { validateBody } from '../middleware/validation.middleware';
import { uploadSchema } from '../schemas/upload.schema';

const uploadRouter = Router();

uploadRouter.post('/', validateBody(uploadSchema), uploadController.uploadImage);

export default uploadRouter;
