import * as S from "./styles";
export function ChatHeader() {
  return (
    <S.Container>
      <S.LeftSection>
        <S.IconWrapper>💬</S.IconWrapper>
        <S.Title>Mini Chat</S.Title>
      </S.LeftSection>

      <S.RightSection>
        <S.StatusIndicator>
          <S.StatusDot />
          <S.StatusText>Online</S.StatusText>
        </S.StatusIndicator>
      </S.RightSection>
    </S.Container>
  );
}
