import styled from 'styled-components';

export const Layout = styled.div`
  width: 330px;
  padding-left: 15px;
  padding-right: 15px;
  /* margin: 0 auto; */

  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(4)};
`;
