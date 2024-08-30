import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser  from 'body-parser';
import { loadEnv, connectDb, disconnectDB } from '@/config';
import indexRouter from '@/router/index.routes';

loadEnv();

const app = express();

app.use(bodyParser.json({ limit: '1mb' })); // Aumenta o limite para 10MB
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));
app
  .use(cors())
  .use(express.json())
  .get('/health', (_req: Request, res: Response) => res.send('Funcionando, OK!'))
  .use(indexRouter);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
