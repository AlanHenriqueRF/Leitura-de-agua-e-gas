import { ConfirmType } from '../protocols';
import { confirmRpository } from '../repository/confirm.repository';
import { measureNotFound } from '../errors/measureNotFound.error';
import { confirmationDuplicate } from '../errors/confirmationDuplicate.error';

async function confirmValue(body: ConfirmType) {
  const measure = await confirmRpository.findConfirmByMeasureUuid(body.measure_uuid);

  if (!measure) throw measureNotFound();

  if (measure.has_confirmed) throw confirmationDuplicate();

  const newMeasure = await confirmRpository.updateConfirm(body);

  return newMeasure;
}

export const confirmService = {
  confirmValue,
};
