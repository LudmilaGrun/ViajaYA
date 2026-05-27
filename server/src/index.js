import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { env } from './config/env.js';
import router from './routes/index.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
app.use(helmet());
app.use(cors({ origin: env.clientOrigin }));
app.use(express.json());
app.use(morgan('dev'));
app.get('/health', (_req, res) => res.json({ ok: true }));
app.use('/api', router);
app.use(errorHandler);

app.listen(env.port, () => console.log(`API on ${env.port}`));
