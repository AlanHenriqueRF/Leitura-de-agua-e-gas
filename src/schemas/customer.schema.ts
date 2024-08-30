import Joi from 'joi';
import { CustomerParamsType, CustomerQueryType } from '../protocols';

const customerParamsSchema = Joi.object<CustomerParamsType>({
    customerCode: Joi.string().uuid().required(),
  });

const customerQuerySchema = Joi.object<CustomerQueryType>({
    measure_type: Joi.string().valid('water').valid('gas').insensitive(),
});

export const customerSchema = {
    customerParamsSchema,
    customerQuerySchema
}