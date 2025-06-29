import type { Message } from "../../types/message";
import * as S from "./styles";

type MessageBubbleProps = Message

export function MessageBubble({
  id,
  author,
  text,
  timestamp,
  isOwn,
  avatarUrl,
}: MessageBubbleProps) {
  return (
    <S.Container $isOwn={isOwn} id={`message-${id}`}>
      <S.Avatar src={avatarUrl} alt={`${author} avatar`} />

      <S.MessageWrapper $isOwn={isOwn}>
        {isOwn && <S.OwnLabel>Você</S.OwnLabel>}
        {!isOwn && <S.AuthorName $isOwn={isOwn}>{author}</S.AuthorName>}

        <S.Bubble $isOwn={isOwn}>{text}</S.Bubble>

        <S.Timestamp $isOwn={isOwn}>{timestamp}</S.Timestamp>
      </S.MessageWrapper>
    </S.Container>
  );
}
