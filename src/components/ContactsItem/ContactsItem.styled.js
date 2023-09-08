import styled from 'styled-components';

export const ListItemSt = styled.li`
  display: flex;
  text-align: center;
  gap: ${props => props.theme.spacing(3)};
`;

export const ListItemButtonSt = styled.button`
  width: 56px;
  margin-left: auto;

  outline: transparent;
  border: 1px solid #8b8ba4;
  border-radius: 4px;
`;
