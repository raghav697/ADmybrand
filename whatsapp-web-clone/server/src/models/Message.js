import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema(
  {
    messageId: { type: String, index: true }, // id from webhook message
    metaMsgId: { type: String, index: true }, // meta_msg_id if present
    waId: { type: String, required: true, index: true }, // user wa_id
    name: { type: String },
    direction: { type: String, enum: ['inbound', 'outbound'], required: true },
    type: { type: String, default: 'text' },
    text: { type: String },
    mediaUrl: { type: String },
    status: {
      type: String,
      enum: ['sent', 'delivered', 'read', 'failed', 'queued', 'unknown'],
      default: 'sent',
      index: true,
    },
    timestamp: { type: Date, default: Date.now, index: true },
    raw: { type: mongoose.Schema.Types.Mixed },
  },
  { collection: 'processed_messages', timestamps: true }
);

MessageSchema.index({ messageId: 1 }, { sparse: true });
MessageSchema.index({ metaMsgId: 1 }, { sparse: true });
MessageSchema.index({ waId: 1, timestamp: -1 });

export const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema);