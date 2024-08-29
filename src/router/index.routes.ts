import { Router } from 'express';
import uploadRouter from '@/router/upload.routes';

const indexRouter = Router();

indexRouter.use('/upload', uploadRouter);

export default indexRouter;
