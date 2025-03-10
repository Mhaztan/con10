import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT || 5000,
    geminiApiKey: process.env.GEMINI_API_KEY,
};
