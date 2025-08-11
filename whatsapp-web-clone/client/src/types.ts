export type Message = {
  _id: string;
  messageId?: string;
  metaMsgId?: string;
  waId: string;
  name?: string;
  direction: 'inbound' | 'outbound';
  type?: string;
  text?: string;
  mediaUrl?: string;
  status: 'sent' | 'delivered' | 'read' | 'failed' | 'queued' | 'unknown';
  timestamp: string;
};

export type Conversation = {
  waId: string;
  name?: string;
  lastMessage?: Message;
};