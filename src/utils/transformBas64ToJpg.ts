import fs from 'fs/promises';
import path from 'path';
import { ImageObject } from '../protocols';

export async function saveBase64Image(base64Image: string, outputFilename: string): Promise<ImageObject> {
  const base64Data = base64Image.split(';base64,').pop();

  const imageBuffer = Buffer.from(base64Data, 'base64');

  const outputPath = path.join(__dirname, outputFilename);

  await fs.writeFile(outputPath, imageBuffer);

  return { outputPath, outputFilename };
}
