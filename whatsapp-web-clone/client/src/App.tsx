import { useEffect, useState } from 'react';
import { api } from './lib/api';
import { getSocket } from './lib/socket';
import type { Conversation, Message } from './types';
import dayjs from 'dayjs';
import clsx from 'clsx';

function Sidebar({ conversations, currentWaId, onSelect }: {
  conversations: Conversation[];
  currentWaId?: string;
  onSelect: (waId: string) => void;
}) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">WhatsApp Web Clone</div>
      <div className="chat-list">
        {conversations.map((c) => (
          <div
            key={c.waId}
            className={clsx('chat-item', { active: c.waId === currentWaId })}
            onClick={() => onSelect(c.waId)}
          >
            <div className="avatar">{(c.name || c.waId).slice(0, 2).toUpperCase()}</div>
            <div className="chat-meta">
              <div className="chat-name">{c.name || c.waId}</div>
              <div className="chat-last">{c.lastMessage?.text || ''}</div>
            </div>
            <div className="chat-time">
              {c.lastMessage?.timestamp ? dayjs(c.lastMessage.timestamp).format('HH:mm') : ''}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MessageBubble({ message }: { message: Message }) {
  const isOutgoing = message.direction === 'outbound';
  return (
    <div className={clsx('bubble-row', { outgoing: isOutgoing })}>
      <div className="bubble">
        <div className="bubble-text">{message.text}</div>
        <div className="bubble-meta">
          <span>{dayjs(message.timestamp).format('HH:mm')}</span>
          {isOutgoing && <span className={clsx('status', message.status)}>{message.status}</span>}
        </div>
      </div>
    </div>
  );
}

function ChatWindow({ waId, name }: { waId: string; name?: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState('');

  useEffect(() => {
    if (!waId) return;
    api.messagesByWaId(waId).then((r) => setMessages(r.messages));
  }, [waId]);

  useEffect(() => {
    const s = getSocket();
    function onNew(data: { message: Message }) {
      if (data.message.waId === waId) setMessages((prev) => [...prev, data.message]);
    }
    function onUpdate(data: { message: Message }) {
      if (data.message.waId === waId)
        setMessages((prev) => prev.map((m) => (m._id === data.message._id ? data.message : m)));
    }
    s.on('message:new', onNew);
    s.on('message:update', onUpdate);
    return () => {
      s.off('message:new', onNew);
      s.off('message:update', onUpdate);
    };
  }, [waId]);

  async function send() {
    const t = text.trim();
    if (!t) return;
    setText('');
    const res = await api.sendMessage(waId, t, name);
    setMessages((prev) => [...prev, res.message]);
  }

  return (
    <div className="chat">
      <div className="chat-header">
        <div className="avatar large">{(name || waId).slice(0, 2).toUpperCase()}</div>
        <div className="chat-title">
          <div className="name">{name || waId}</div>
          <div className="subtitle">{waId}</div>
        </div>
      </div>
      <div className="chat-body">
        {messages.map((m) => (
          <MessageBubble key={m._id} message={m} />
        ))}
      </div>
      <div className="chat-input">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message"
          onKeyDown={(e) => e.key === 'Enter' && send()}
        />
        <button onClick={send}>Send</button>
      </div>
    </div>
  );
}

export default function App() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [current, setCurrent] = useState<Conversation | null>(null);

  useEffect(() => {
    api.conversations().then((r) => {
      setConversations(r.conversations);
      if (r.conversations.length && !current) setCurrent(r.conversations[0]);
    });
  }, []);

  useEffect(() => {
    const s = getSocket();
    function refresh() {
      api.conversations().then((r) => setConversations(r.conversations));
    }
    s.on('message:new', refresh);
    s.on('message:update', refresh);
    return () => {
      s.off('message:new', refresh);
      s.off('message:update', refresh);
    };
  }, []);

  const currentWaId = current?.waId;
  const currentName = current?.name;

  return (
    <div className="layout">
      <Sidebar
        conversations={conversations}
        currentWaId={currentWaId}
        onSelect={(waId) => setCurrent(conversations.find((c) => c.waId === waId) || null)}
      />
      {currentWaId ? (
        <ChatWindow waId={currentWaId} name={currentName} />
      ) : (
        <div className="empty">Select a conversation</div>
      )}
    </div>
  );
}
