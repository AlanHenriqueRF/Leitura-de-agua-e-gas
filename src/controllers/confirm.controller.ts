import { Request, Response } from 'express';
import { confirmService } from '../service/confirm.service';

async function confirmValue(req: Request, res: Response) {
  const body = req.body;

  const confirm = await confirmService.confirmValue(body);

  const response = {
    success: confirm.has_confirmed,
  };

  res.status(200).send(response);
}

export const confirmController = {
  confirmValue,
};
