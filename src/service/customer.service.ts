import { measureNotFound } from '../errors/measureNotFound.error';
import { customerRepository } from '../repository/customer.repository';

async function getList(measure_type: string | undefined, customerCode: string) {
  const list = await customerRepository.getListAll(customerCode);

  if (!list[0]) throw measureNotFound();

  let newlist = list.map((i) => {
    return {
      measure_uuid: i.measure_uuid,
      measure_datetime: i.measure_datetime,
      measure_type: i.measure_type,
      has_confirmed: i.has_confirmed,
      image_url: i.image_url,
    };
  });

  if (measure_type) {
    newlist = newlist.filter((i) => {
      if (i.measure_type.toLowerCase() === measure_type.toLowerCase()) {
        return i;
      }
    });
  }

  return newlist;
}

export const customerService = {
  getList,
};
