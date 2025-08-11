import express from 'express';
import http from 'http';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { Server as SocketIOServer } from 'socket.io';
import { connectToDatabase } from './utils/db.js';
import { createMessagesRouter } from './routes/messages.js';
import { createConversationsRouter } from './routes/conversations.js';
import { createWebhookRouter } from './routes/webhook.js';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: process.env.CORS_ORIGIN?.split(',').map((s) => s.trim()) || ['*'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  },
});

app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',').map((s) => s.trim()) || '*'}));
app.use(express.json({ limit: '2mb' }));
app.use(morgan('dev'));

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.use('/api/messages', createMessagesRouter(io));
app.use('/api/conversations', createConversationsRouter());
app.use('/api/webhook', createWebhookRouter(io));

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error', details: err?.message });
});

const PORT = process.env.PORT || 4000;

async function start() {
  await connectToDatabase(process.env.MONGODB_URI);
  server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

start().catch((err) => {
  console.error('Failed to start server', err);
  process.exit(1);
});