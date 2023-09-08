import styled from 'styled-components';

export const ContactsFilterTitle = styled.h1`
  margin-bottom: 8px;
`;

export const ContactsFilterByName = styled.input`
  width: 300px;
  margin-top: 8px;
  padding: 4px;
  outline: transparent;
  border: 1px solid #8b8ba4;
  border-radius: 4px;
  font-size: 16px;

  &:hover {
    background-color: #6bad8e;
  }
  /* 
  &:focus {
    border-color: #3498db;
  } */
`;
