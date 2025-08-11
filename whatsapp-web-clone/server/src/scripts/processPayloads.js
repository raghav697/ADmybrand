import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { connectToDatabase } from '../utils/db.js';
import { Message } from '../models/Message.js';
import { createWebhookRouter } from '../routes/webhook.js';

// We will reuse the webhook logic by creating a faux handler
function createProcessor() {
  const fakeIo = { emit: () => {} };
  const router = createWebhookRouter(fakeIo);
  const handler = router.stack.find((l) => l.route?.path === '/' && l.route?.methods?.post)?.route?.stack?.[0]?.handle;
  if (!handler) throw new Error('Failed to load webhook handler');
  return handler;
}

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const payloadDir = process.argv[2] || path.resolve(__dirname, 'payloads');
  const mongoUri = process.env.MONGODB_URI;
  const files = fs.existsSync(payloadDir) ? fs.readdirSync(payloadDir).filter((f) => f.endsWith('.json')) : [];

  if (!files.length) {
    console.log(`No JSON files found in ${payloadDir}`);
    process.exit(0);
  }

  await connectToDatabase(mongoUri);

  const handler = createProcessor();

  for (const file of files.sort()) {
    const full = path.join(payloadDir, file);
    const content = JSON.parse(fs.readFileSync(full, 'utf-8'));
    await new Promise((resolve, reject) => {
      // fake Express req/res
      const req = { body: content };
      const res = { json: () => resolve() };
      handler(req, res, (err) => (err ? reject(err) : resolve()));
    });
    console.log(`Processed ${file}`);
  }

  console.log('Done');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});