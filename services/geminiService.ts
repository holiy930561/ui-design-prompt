import { GoogleGenAI } from "@google/genai";

// We use process.env.API_KEY exclusively as per guidelines
export const refinePromptWithGemini = async (currentPrompt: string, model: string = 'gemini-2.5-flash'): Promise<string> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key is missing in environment variables");
    throw new Error("API Key is missing");
  }

  // Initialize the client with the environment variable
  const ai = new GoogleGenAI({ apiKey });

  if (!currentPrompt.trim()) {
    return "";
  }

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: `You are an expert AI Art Prompt Engineer for Midjourney and Stable Diffusion. 
      Refine the following UI design prompt to be more descriptive, high-quality, and professional.
      Keep the core meaning but enhance the adjectives and technical terms related to UI/UX design.
      Return ONLY the refined English prompt string. Do not include any introduction or markdown.
      
      Input Prompt: "${currentPrompt}"`,
    });

    return response.text || "";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
};