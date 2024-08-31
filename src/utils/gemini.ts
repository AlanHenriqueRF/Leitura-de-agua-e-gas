import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleAIFileManager } from '@google/generative-ai/server';

async function getMeasureValue(temporaryLink: string, prompt: string) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

  const result = await model.generateContent([
    {
      fileData: {
        mimeType: 'image/jpeg',
        fileUri: temporaryLink,
      },
    },
    { text: prompt },
  ]);

  return result.response.text();
}

async function getTemporaryLink(imagePath: string, nameImage: string) {
  const fileManager = new GoogleAIFileManager(process.env.GEMINI_API_KEY);

  const uploadResponse = await fileManager.uploadFile(imagePath, {
    mimeType: 'image/jpeg',
    displayName: `${nameImage}`,
  });

  return uploadResponse.file.uri;
}

export const gemini = {
  getMeasureValue,
  getTemporaryLink,
};
