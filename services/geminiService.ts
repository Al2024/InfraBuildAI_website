
import { GoogleGenAI } from "@google/genai";

export class AIService {
  /**
   * Retrieves a chat response from the model, supporting conversation history.
   * Following guidelines: Creates a new instance per call to ensure up-to-date API key.
   */
  async getChatResponse(prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) {
    // Correctly initialize with process.env.API_KEY directly as a named parameter.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      // Include history to maintain conversation state.
      history: history,
      config: {
        systemInstruction: `You are the InfraBuild AI Strategic Consultant. 
        InfraBuild AI specializes in data engineering, SaaS infrastructure, and AI strategy for enterprise clients.
        Your tone is professional, technical yet accessible, minimalist, and authoritative.
        Focus on how data solutions and AI can drive business growth. 
        Always provide structural advice, referencing cloud best practices (AWS, Azure, GCP).`,
      }
    });

    const response = await chat.sendMessage({ message: prompt });
    // Correctly access .text property on GenerateContentResponse.
    return response.text;
  }
}

export const aiService = new AIService();
