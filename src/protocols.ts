export type UploadImage = {
  image: string;
  customer_code: string;
  measure_datetime: Date | string;
  measure_type: 'Water' | 'Gas' | 'water' | 'gas' | 'WATER' | 'GAS';
};

export type MimeType = 'image/jpeg' | 'image/png' | 'image/gif' | 'application/pdf' | 'audio/mpeg' | 'video/mp4';

export type ApplicationError = {
  name: string;
  message: string;
};

export type RequestError = {
  status: number;
  data: object | null;
  statusText: string;
  name: string;
  message: string;
};
