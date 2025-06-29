import * as S from "./styles";

interface MessageBubbleProps {
  id: number;
  author: string;
  text: string;
  timestamp?: string;
  isOwn: boolean;
  avatarUrl: string;
}

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
