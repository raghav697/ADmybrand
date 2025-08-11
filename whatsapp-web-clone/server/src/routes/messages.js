import { Router } from 'express';
import { Message } from '../models/Message.js';

export function createMessagesRouter(io) {
  const router = Router();

  // List messages for a given wa_id
  router.get('/:waId', async (req, res, next) => {
    try {
      const { waId } = req.params;
      const messages = await Message.find({ waId }).sort({ timestamp: 1 }).lean();
      res.json({ messages });
    } catch (err) {
      next(err);
    }
  });

  // Send a demo message (outbound)
  router.post('/', async (req, res, next) => {
    try {
      const { waId, text, name } = req.body;
      if (!waId || !text) return res.status(400).json({ error: 'waId and text are required' });

      const newMessage = await Message.create({
        waId,
        text,
        name,
        direction: 'outbound',
        status: 'sent',
        type: 'text',
        messageId: `local_${Date.now()}`,
        timestamp: new Date(),
      });

      io.emit('message:new', { message: newMessage });
      res.status(201).json({ message: newMessage });
    } catch (err) {
      next(err);
    }
  });

  return router;
}