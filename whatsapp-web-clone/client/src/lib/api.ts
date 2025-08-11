export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

async function request(path: string, init?: RequestInit) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...init,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export const api = {
  health: () => request('/api/health'),
  conversations: () => request('/api/conversations'),
  messagesByWaId: (waId: string) => request(`/api/messages/${waId}`),
  sendMessage: (waId: string, text: string, name?: string) =>
    request('/api/messages', { method: 'POST', body: JSON.stringify({ waId, text, name }) }),
};