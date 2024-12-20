import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// import dotenv from 'dotenv';
import OpenAI from 'openai';
import { recipeRoutes } from './routes';

// dotenv.config();

const app: Application = express();
const port: number = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// OpenAI Configuration
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY
});

// Routes
app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});
app.use('/api', recipeRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
