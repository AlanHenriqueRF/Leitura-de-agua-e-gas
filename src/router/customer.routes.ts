import { Router } from 'express';
import { validateParams, validateQuery } from '../middleware/validation.middleware';
import { customerSchema } from '../schemas/customer.schema';
import { customerController } from '../controllers/customer.controller';

const customerRouter = Router();

customerRouter.get(
  '/:customerCode/list',
  validateParams(customerSchema.customerParamsSchema),
  validateQuery(customerSchema.customerQuerySchema),
  customerController.getList,
);

export default customerRouter;
