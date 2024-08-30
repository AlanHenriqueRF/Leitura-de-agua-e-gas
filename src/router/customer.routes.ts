import { Router } from 'express';
import { validateParams ,validateQuery } from '../middleware/validation.middleware';
import { customerSchema } from '../schemas/customer.schema';

const customerRouter = Router();

customerRouter.get('/:customerCode/list', 
validateParams(customerSchema.customerParamsSchema), 
validateQuery(customerSchema.customerQuerySchema),
 (req,res)=>{
    console.log(req.params)
    console.log(req.query)
    res.send('aiaiai')});

export default customerRouter;
