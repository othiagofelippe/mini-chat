import { useCallback, useEffect, useRef, useState } from "react";
import { ChatHeader } from "./components/ChatHeader";
import { MessageBubble } from "./components/MessageBubble";
import { MessageInput } from "./components/MessageInput";
import * as S from "./styles";
import type { Message } from "./types/message";
import {
  fetchMessages,
  getNextIncomingMessage,
  sendMessage,
} from "./services/chatApi";

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const loadInitialMessages = async () => {
      try {
        const initialMessages = await fetchMessages();
        setMessages(initialMessages);
      } catch (error) {
        console.error("Erro ao carregar mensagens:", error);
      } finally {
        setLoading(false);
      }
    };

    loadInitialMessages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newMessage = getNextIncomingMessage();
      if (newMessage) {
        setMessages((prev) => [...prev, newMessage]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = useCallback(async (text: string) => {
    try {
      const newMessage = await sendMessage(text);
      setMessages((prev) => [...prev, newMessage]);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  }, []);

  if (loading) {
    return (
      <S.Container>
        <ChatHeader />
        <S.LoadingContainer>
          <S.LoadingText>Carregando mensagens...</S.LoadingText>
        </S.LoadingContainer>
        <MessageInput disabled onSendMessage={handleSendMessage} />
      </S.Container>
    );
  }

  return (
    <S.Container>
      <ChatHeader />

      <S.MessagesContainer>
        {messages.map((msg) => (
          <MessageBubble
            key={`${msg.id}-${msg.timestamp}`}
            id={msg.id}
            author={msg.author}
            text={msg.text}
            timestamp={msg.timestamp}
            isOwn={msg.isOwn}
            avatarUrl={msg.avatarUrl}
          />
        ))}
        <div ref={messagesEndRef} />
      </S.MessagesContainer>

      <MessageInput onSendMessage={handleSendMessage} />
    </S.Container>
  );
}

export default App;
