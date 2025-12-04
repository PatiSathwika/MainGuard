import { GoogleGenAI, Type } from "@google/genai";
import { RiskLevel } from "../types";

// Note: In a real production app, API calls should go through a backend to protect the key.
// For this demo, we assume the key is available in the environment.
const apiKey = process.env.API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getAiAnalysis = async (score: number, level: RiskLevel): Promise<string> => {
  if (!ai) {
    return "AI service is currently unavailable. Please configure your API Key.";
  }

  const prompt = `
    You are a compassionate mental health assistant. A user has just completed a self-screening test.
    Their score is ${score} (Risk Level: ${level}).
    
    Please provide a supportive response that includes:
    1. Acknowledgment of their feelings.
    2. Three general, non-medical coping strategies suitable for this risk level.
    3. A strong disclaimer that this is not a medical diagnosis and they should seek professional help if needed.
    
    Keep the tone calm, empathetic, and professional. Keep it under 200 words.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are a helpful, empathetic mental health assistant. Do not provide medical diagnoses.",
        temperature: 0.7,
      }
    });

    return response.text || "Unable to generate analysis at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while connecting to the intelligent assistant.";
  }
};

export const getChatResponse = async (userMessage: string): Promise<string> => {
    if (!ai) {
        return "AI service is unavailable.";
    }
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: userMessage,
            config: {
                systemInstruction: "You are a mental health support bot for a website called MindGuard. Be brief, supportive, and always recommend professional help for serious concerns.",
            }
        });
        return response.text || "I'm listening, but I couldn't generate a response.";
    } catch (error) {
        console.error("Chat Error:", error);
        return "Sorry, I'm having trouble connecting right now.";
    }
}
