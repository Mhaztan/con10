// import { generateCaptions, generateVideoScript, repurposeContent } from '../services/contentService.js';

// export const getCaptions = async (req, res) => {
//     try {
//         const { topic, style } = req.body;
//         if (!topic || !style) {
//             return res.status(400).json({ message: 'Topic and style are required' });
//         }

//         const captions = await generateCaptions(topic, style);
//         res.json({ result: captions });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// export const getVideoScript = async (req, res) => {
//     try {
//         const { topic, length, style } = req.body;
//         if (!topic || !length || !style) {
//             return res.status(400).json({ message: 'Topic, length, and style are required' });
//         }

//         const script = await generateVideoScript(topic, length, style);
//         res.json({ result: script });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// export const getRepurposedContent = async (req, res) => {
//     try {
//         const { content, format } = req.body;
//         if (!content || !format) {
//             return res.status(400).json({ message: 'Content and format are required' });
//         }

//         const repurposed = await repurposeContent(content, format);
//         res.json({ result: repurposed });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

import {
    generateCaptions,
    generateVideoScript,
    repurposeContent,
    paraphraseText,
    summarizeText,
} from '../services/contentService.js';

export const getCaptions = async (req, res) => {
    try {
        const { topic, style } = req.body;
        if (!topic || !style) {
            return res.status(400).json({ message: 'Topic and style are required' });
        }

        const captions = await generateCaptions(topic, style);
        res.json({ result: captions });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getVideoScript = async (req, res) => {
    try {
        const { topic, length, style } = req.body;
        if (!topic || !length || !style) {
            return res.status(400).json({ message: 'Topic, length, and style are required' });
        }

        const script = await generateVideoScript(topic, length, style);
        res.json({ result: script });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getRepurposedContent = async (req, res) => {
    try {
        const { content, format } = req.body;
        if (!content || !format) {
            return res.status(400).json({ message: 'Content and format are required' });
        }

        const repurposed = await repurposeContent(content, format);
        res.json({ result: repurposed });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getParaphrasedText = async (req, res) => {
    try {
        const { text } = req.body;
        if (!text) {
            return res.status(400).json({ message: 'Text is required' });
        }

        const paraphrased = await paraphraseText(text);
        res.json({ result: paraphrased });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getSummarizedText = async (req, res) => {
    try {
        const { text, length } = req.body; // Add optional length/summary size parameter
        if (!text) {
            return res.status(400).json({ message: 'Text is required' });
        }

        const summary = await summarizeText(text, length);
        res.json({ result: summary });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};