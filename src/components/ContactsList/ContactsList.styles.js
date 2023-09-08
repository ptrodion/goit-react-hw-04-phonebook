import styled from 'styled-components';

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(3)};
`;

export const ContactsListSt = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(1)};
`;
