import { Router } from 'express';
import uploadRouter from './upload.routes';
import confirmRouter from './confirm.routes';
import customerRouter from './customer.routes';

const indexRouter = Router();

indexRouter.use('/upload', uploadRouter);
indexRouter.use('/confirm', confirmRouter);
indexRouter.use('/', customerRouter);

export default indexRouter;
