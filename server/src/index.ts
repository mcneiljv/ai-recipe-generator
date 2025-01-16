import express, { Application } from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import { recipeRoutes } from './routes';

const app: Application = express();
const port: number = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Environment variable validation
if (!process.env.OPEN_AI_KEY) {
  throw new Error('Missing OPEN_AI_KEY environment variable');
}

// OpenAI Configuration
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY
});

// Routes
app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});
app.use('/api', recipeRoutes);

// Error handling middleware
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something went wrong!' });
  }
);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
