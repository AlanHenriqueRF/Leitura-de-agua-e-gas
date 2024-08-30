import { Request, Response } from 'express';
import { customerService } from '../service/customer.service';

async function getList(req: Request, res: Response) {
  let { measure_type }  = req.query;
  const { customerCode } = req.params;

  measure_type = measure_type ? measure_type.toString() : undefined

  const list = await customerService.getList(measure_type , customerCode);

  const response = {
    customerCode,
    measures: list,
  };

  res.status(200).send(response);
}

export const customerController = {
  getList,
};
