import { Router } from 'express';
import { Message } from '../models/Message.js';

export function createConversationsRouter() {
  const router = Router();

  router.get('/', async (_req, res, next) => {
    try {
      // Aggregate unique waId with latest message
      const pipeline = [
        { $sort: { timestamp: -1 } },
        {
          $group: {
            _id: '$waId',
            lastMessage: { $first: '$$ROOT' },
            name: { $first: '$name' },
          },
        },
        { $project: { _id: 0, waId: '$_id', lastMessage: 1, name: 1 } },
        { $sort: { 'lastMessage.timestamp': -1 } },
      ];

      const conversations = await Message.aggregate(pipeline);
      res.json({ conversations });
    } catch (err) {
      next(err);
    }
  });

  return router;
}