import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormStyle = styled(Form)`
  width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};

  padding: 10px;

  border: 1px solid #8b8ba4;
  border-radius: ${props => props.theme.radius.middle};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const LabelStyle = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};

  font-weight: 500;
`;

export const FieldStyle = styled(Field)`
  width: 100%;
  padding: 4px;
  outline: transparent;
  border: 1px solid rgba(46, 47, 66, 0.4);
  border-radius: 4px;
  font-size: 16px;

  &:hover {
    background-color: #6bad8e;
  }

  &:focus {
    border-color: #3498db;
  }
`;

export const ButtonStyle = styled.button`
  display: block;
  margin: 0 auto;
  max-width: 125px;
  padding: 4px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: 1px solid transparent;
  outline: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  color: inherit;
  background-color: #fcf5ff91;

  &:hover {
    background-color: #8b8ba4;
    color: white;
  }

  &:focus {
    border-color: #3498db;
  }
`;
