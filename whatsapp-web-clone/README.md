# WhatsApp Web Clone

Full-stack demo that ingests WhatsApp Business Webhook payloads into MongoDB and displays them in a WhatsApp Web–like UI. Includes a demo send-message flow (no external sending) and optional real-time updates via Socket.IO.

## Stack
- Server: Node.js, Express, Mongoose, Socket.IO
- Client: React (Vite + TypeScript)
- DB: MongoDB Atlas

## Monorepo Structure
- `server` – API, WebSocket, webhook processor, Mongo models
- `client` – React UI

## Quick Start (Local)
1. Server
   - Copy `server/.env.example` to `server/.env` and set `MONGODB_URI`
   - Install deps and run:
     ```bash
     cd server && npm i && npm run dev
     ```
2. Client
   - Copy `client/.env.example` to `client/.env`
   - Install deps and run:
     ```bash
     cd client && npm i && npm run dev
     ```

## Process Sample Payloads
Place JSON files in `server/src/scripts/payloads` and run:
```bash
cd server
npm run process-payloads -- "src/scripts/payloads"
```
The script inserts messages and applies status updates (by `id` or `meta_msg_id`) into the `whatsapp.processed_messages` collection.

## API
- `GET /api/conversations` – list chats by `waId` with last message
- `GET /api/messages/:waId` – list messages
- `POST /api/messages` – create a local outbound message `{ waId, text, name? }`
- `POST /api/webhook` – ingest webhook payloads

## Deployment
- Server: Render/Heroku/Fly/Any Node host
  - Set envs: `PORT`, `MONGODB_URI`, `CORS_ORIGIN`
- Client: Vercel/Netlify
  - Set `VITE_API_URL` to deployed server URL

## Notes
- No real WhatsApp sending occurs; this is a simulation interface.
- Socket.IO pushes `message:new` and `message:update` to live UIs.
