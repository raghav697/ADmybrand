import { Router } from 'express';
import { Message } from '../models/Message.js';

function mapStatus(status) {
  const allowed = ['sent', 'delivered', 'read', 'failed', 'queued'];
  if (!status) return 'unknown';
  const s = status.toLowerCase();
  return allowed.includes(s) ? s : 'unknown';
}

export function createWebhookRouter(io) {
  const router = Router();

  router.post('/', async (req, res, next) => {
    try {
      const payload = req.body;

      // Handle message notifications
      const messages = payload?.entry?.flatMap((e) => e?.changes?.flatMap((c) => c?.value?.messages || []) || []) || [];
      const contacts = payload?.entry?.flatMap((e) => e?.changes?.flatMap((c) => c?.value?.contacts || []) || []) || [];
      const statuses = payload?.entry?.flatMap((e) => e?.changes?.flatMap((c) => c?.value?.statuses || []) || []) || [];

      // Insert messages
      for (const msg of messages) {
        const waId = msg?.from || msg?.wa_id || contacts?.[0]?.wa_id;
        const name = contacts?.[0]?.profile?.name || contacts?.[0]?.name || undefined;
        const messageId = msg?.id;
        const metaMsgId = msg?.context?.id || msg?.meta_msg_id;

        const type = msg?.type || (msg?.text ? 'text' : 'unknown');
        const text = msg?.text?.body || msg?.body || undefined;
        const timestampMs = Number(msg?.timestamp) * 1000;

        const existing = await Message.findOne({ messageId });
        if (existing) continue;

        const created = await Message.create({
          waId,
          name,
          direction: 'inbound',
          type,
          text,
          messageId,
          metaMsgId,
          status: 'delivered',
          timestamp: isNaN(timestampMs) ? new Date() : new Date(timestampMs),
          raw: msg,
        });

        io.emit('message:new', { message: created });
      }

      // Update statuses
      for (const st of statuses) {
        const messageId = st?.id || st?.message_id || st?.message?.id;
        const metaMsgId = st?.meta_msg_id;
        const waId = st?.recipient_id || st?.wa_id;
        const status = mapStatus(st?.status);
        const timestampMs = Number(st?.timestamp) * 1000;

        const filter = messageId ? { messageId } : metaMsgId ? { metaMsgId } : waId ? { waId } : null;
        if (!filter) continue;

        const updated = await Message.findOneAndUpdate(filter, {
          status,
          timestamp: isNaN(timestampMs) ? undefined : new Date(timestampMs),
        }, { new: true });

        if (updated) io.emit('message:update', { message: updated });
      }

      res.json({ ok: true });
    } catch (err) {
      next(err);
    }
  });

  return router;
}