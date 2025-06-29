import type { Message } from "../types/message";

const messagesStore: Message[] = [
  {
    id: 1,
    author: "João",
    text: "Olá, pessoal!",
    timestamp: "14:36",
    isOwn: false,
    avatarUrl: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 2,
    author: "Maria",
    text: "Oi, João! Tudo bem?",
    timestamp: "14:37",
    isOwn: false,
    avatarUrl: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    author: "João",
    text: "Tudo ótimo! E com você?",
    timestamp: "14:38",
    isOwn: false,
    avatarUrl: "https://i.pravatar.cc/150?img=3",
  },
];

let nextId = 4;

export function fetchMessages(): Promise<Message[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...messagesStore]);
    }, 300);
  });
}

export function sendMessage(text: string): Promise<Message> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newMessage: Message = {
        id: nextId++,
        author: "Você",
        text,
        timestamp: new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isOwn: true,
        avatarUrl: "https://github.com/othiagofelippe.png",
      };

      messagesStore.push(newMessage);
      resolve(newMessage);
    }, 300);
  });
}

const incomingMessages = [
  {
    author: "Ana",
    text: "Que legal esse chat!",
    avatarUrl: "https://i.pravatar.cc/150?img=9",
  },
  {
    author: "Carlos",
    text: "Conseguem me ajudar?",
    avatarUrl: "https://i.pravatar.cc/150?img=4",
  },
  {
    author: "Maria",
    text: "Claro! Qual sua dúvida?",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
  },
  {
    author: "Ana",
    text: "Também posso ajudar!",
    avatarUrl: "https://i.pravatar.cc/150?img=9",
  },
];

let incomingIndex = 0;

export function getNextIncomingMessage(): Message | null {
  if (incomingIndex >= incomingMessages.length) return null;

  const messageData = incomingMessages[incomingIndex++];
  const newMessage: Message = {
    id: nextId++,
    ...messageData,
    timestamp: new Date().toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    isOwn: false,
  };

  messagesStore.push(newMessage);
  return newMessage;
}
