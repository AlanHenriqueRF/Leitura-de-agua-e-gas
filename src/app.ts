import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { loadEnv, connectDb, disconnectDB } from './config';

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .get('/health', (_req: Request, res: Response) => res.send('Funcionando OK!'))

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;