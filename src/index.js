import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import contentRoutes from './routes/contentRoutes.js';
import config from './config.js';

const app = express();

// app.use(cors());
app.use(cors({
    origin: "https://con10-frontend.vercel.app",  // Allow only this domain
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));

app.use(bodyParser.json());

app.use('/api/content', contentRoutes);

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
