import { Router } from 'express';
import { confirmController } from '../controllers/confirm.controller';
import { validateBody } from '../middleware/validation.middleware';
import { confirmSchema } from '../schemas/confirm.schema';

const confirmRouter = Router();

confirmRouter.patch('/', validateBody(confirmSchema), confirmController.confirmValue);

export default confirmRouter;
