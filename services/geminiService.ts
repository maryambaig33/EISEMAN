import { GoogleGenAI } from "@google/genai";
import { Product } from "../types";

// Initialize the Gemini API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getStylistAdvice = async (
  userQuery: string,
  inventoryContext: Product[]
): Promise<string> => {
  try {
    // Create a simplified context string from the inventory
    const contextString = inventoryContext
      .map((p) => `- ${p.brand} ${p.name} ($${p.price.toLocaleString()})`)
      .join("\n");

    const systemInstruction = `You are an expert luxury jewelry concierge for Eiseman Jewels. 
    Your tone is sophisticated, helpful, and polite. 
    You have access to the following inventory list:\n${contextString}\n
    Recommend items from this list based on the user's request. 
    If they ask for something general, educate them on style. 
    Keep responses concise (under 150 words).`;

    const model = 'gemini-2.5-flash';

    const response = await ai.models.generateContent({
      model: model,
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I apologize, I am having trouble connecting to the styling service at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I am currently unable to access the concierge service. Please try again later.";
  }
};