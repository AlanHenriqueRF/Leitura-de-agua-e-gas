import { MimeType } from "@/protocols";
import { GoogleGenerativeAI } from "@google/generative-ai";

async function getMeasureValue(image: string, prompt: string) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  function fileToGenerativePart(mimeType: MimeType) {
      return {
          inlineData: {
              data: image,
              mimeType,
          },
      };
  }
  
  const imagePart = fileToGenerativePart("image/jpeg");

  const result = await model.generateContent([prompt, imagePart]);
  return result.response.text();
}

export const gemini = {
  getMeasureValue,
};
