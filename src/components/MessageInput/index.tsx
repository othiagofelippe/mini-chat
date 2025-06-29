import React, { useState } from "react";
import * as S from "./styles";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export function MessageInput({
  onSendMessage,
  disabled = false,
}: MessageInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <S.Container>
      <form
        onSubmit={handleSubmit}
        style={{ flex: 1, display: "flex", gap: "12px" }}
      >
        <S.Input
          type="text"
          placeholder="Digite sua mensagem..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          disabled={disabled}
        />

        <S.SendButton type="submit" disabled={disabled || !message.trim()}>
          Enviar
        </S.SendButton>
      </form>
    </S.Container>
  );
}
