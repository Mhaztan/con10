import { GoogleGenerativeAI } from "@google/generative-ai";
import config from '../config.js';

const genAI = new GoogleGenerativeAI(config.geminiApiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


const callGeminiAPI = async (prompt) => {
    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.candidates[0].content.parts[0].text;
        return text;
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        throw new Error('Failed to generate content');
    }
};

export const generateCaptions = async (topic, style) => {
    const prompt = `Generate 3 social media captions with hashtags for this topic: '${topic}'.  
  The captions should be short, engaging, and aligned with the '${style}' style.  
  Hashtags should be relevant and popular.`;
    return await callGeminiAPI(prompt);
};

export const generateVideoScript = async (topic, length, style) => {
    const prompt = `Create a structured YouTube script for this topic: '${topic}'.  
  The video should be '${length}' in length and have a '${style}' tone.  
  Include:  
  - An engaging introduction  
  - A structured breakdown of key points  
  - A closing statement`;
    return await callGeminiAPI(prompt);
};

export const repurposeContent = async (content, format) => {
    const prompt = `Repurpose this content into a '${format}'.  
  Content: '${content}'`;
    return await callGeminiAPI(prompt);
};

// export const paraphraseText = async (text) => {
//   return `Paraphrased version of:\n${text}\n\nNew Version: This is a different way to say the same thing.`;
// };

export const paraphraseText = async (text) => {
  const prompt = `\n${text}\n\nNew Version: This is a different way to say the same thing.`;
  return await callGeminiAPI(prompt);
};

// export const summarizeText = async (text, length = 'short') => {
//   return `Summary (${length}): This is a short summary of the provided text.`;
// };

export const summarizeText = async (text, length = 'short') => {
  const prompt = `Summary (${length}): This is a short summary of the provided text.\n\n${text}`;
  return await callGeminiAPI(prompt);
};