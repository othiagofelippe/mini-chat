import styled from "styled-components";

export const Container = styled.div<{ $isOwn: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 16px;
  flex-direction: ${(props) => (props.$isOwn ? "row-reverse" : "row")};
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

export const MessageWrapper = styled.div<{ $isOwn: boolean }>`
  display: flex;
  flex-direction: column;
  max-width: 70%;
  align-items: ${(props) => (props.$isOwn ? "flex-end" : "flex-start")};
`;

export const AuthorName = styled.span<{ $isOwn: boolean }>`
  font-size: 12px;
  font-weight: 500;
  color: #6b7280;
  margin-bottom: 4px;
  margin-left: ${(props) => (props.$isOwn ? "0" : "4px")};
  margin-right: ${(props) => (props.$isOwn ? "4px" : "0")};
  display: ${(props) => (props.$isOwn ? "none" : "block")};
`;

export const Bubble = styled.div<{ $isOwn: boolean }>`
  padding: 12px 16px;
  border-radius: 18px;
  background-color: ${(props) => (props.$isOwn ? "#6366f1" : "#f3f4f6")};
  color: ${(props) => (props.$isOwn ? "#ffffff" : "#1f2937")};
  font-size: 14px;
  line-height: 1.4;
  word-wrap: break-word;
  position: relative;

  ${(props) =>
    props.$isOwn
      ? `border-bottom-right-radius: 4px;`
      : `border-bottom-left-radius: 4px;`}
`;

export const Timestamp = styled.span<{ $isOwn: boolean }>`
  font-size: 11px;
  color: #9ca3af;
  margin-top: 4px;
  margin-left: ${(props) => (props.$isOwn ? "0" : "4px")};
  margin-right: ${(props) => (props.$isOwn ? "4px" : "0")};
`;

export const OwnLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #6366f1;
  margin-bottom: 4px;
  margin-right: 4px;
`;
