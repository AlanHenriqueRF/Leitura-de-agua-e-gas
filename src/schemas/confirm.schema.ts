import Joi from 'joi';
import { ConfirmType } from '../protocols';

export const confirmSchema = Joi.object<ConfirmType>({
  measure_uuid: Joi.string().uuid().required(),
  confirmed_value: Joi.number().integer().positive().required(),
});
