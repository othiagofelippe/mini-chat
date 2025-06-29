import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background-color: #ffffff;
  border-top: 1px solid #e5e7eb;
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  outline: none;
  font-size: 14px;
  background-color: #f9fafb;

  &:focus {
    border-color: #6366f1;
    background-color: #ffffff;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const SendButton = styled.button`
  height: 40px;
  border: none;
  border-radius: 12px;
  background-color: #6366f1;
  color: white;
  cursor: pointer;
  padding: 0 16px;
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #4f46e5;
  }

  &:disabled {
    background-color: #d1d5db;
    cursor: not-allowed;
  }
`;
