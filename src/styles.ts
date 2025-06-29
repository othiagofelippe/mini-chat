import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 98vh;
  min-width: 320px;
  margin: 0 auto;
  padding: 0;
  background-color: #ffffff;
`;

export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 20px;
`;

export const LoadingContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LoadingText = styled.p`
  font-size: 20px;
  color: #6b7280;
  font-weight: 500;
`;
