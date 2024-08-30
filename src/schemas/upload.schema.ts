import Joi from 'joi';
import { UploadImage } from '@/protocols';

export const uploadSchema = Joi.object<UploadImage>({
  image: Joi.string().base64().required(),
  customer_code: Joi.string().required(),
  measure_datetime: Joi.string().isoDate().required(),
  measure_type: Joi.string().valid('water').valid('gas').insensitive().required(),
});
