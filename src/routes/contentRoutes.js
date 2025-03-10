// import express from 'express';
// import { getCaptions, getVideoScript, getRepurposedContent } from '../controllers/contentController.js';
// import { detectAdBlock } from '../middleware/adBlockMiddleware.js';

// const router = express.Router();

// router.post('/captions', detectAdBlock, getCaptions);
// router.post('/video-script', detectAdBlock, getVideoScript);
// router.post('/repurpose', detectAdBlock, getRepurposedContent);

// export default router;

import express from 'express';
import {
    getCaptions,
    getVideoScript,
    getRepurposedContent,
    getParaphrasedText,
    getSummarizedText,
} from '../controllers/contentController.js';
import { detectAdBlock } from '../middleware/adBlockMiddleware.js';
import rateLimitMiddleware from '../middleware/rateLimitMiddleware.js';

const router = express.Router();

router.post('/captions', detectAdBlock, rateLimitMiddleware(5, 60000), getCaptions);
router.post('/video-script', detectAdBlock, rateLimitMiddleware(5, 60000), getVideoScript);
router.post('/repurpose', detectAdBlock, rateLimitMiddleware(5, 60000), getRepurposedContent);
router.post('/paraphrase', detectAdBlock, rateLimitMiddleware(5, 60000), getParaphrasedText);
router.post('/summarize', detectAdBlock, rateLimitMiddleware(5, 60000), getSummarizedText);

export default router;