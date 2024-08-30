import { Router } from 'express';
import uploadRouter from './upload.routes';
import confirmRouter from './confirm.routes';

const indexRouter = Router();

indexRouter.use('/upload', uploadRouter);
indexRouter.use('/confirm', confirmRouter);

export default indexRouter;
