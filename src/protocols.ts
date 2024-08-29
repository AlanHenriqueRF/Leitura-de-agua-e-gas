export type UploadImage = {
    image: string;
    customer_code: string;
    measure_datetime: Date | string;
    measure_type: "Water" | "Gas";
}
