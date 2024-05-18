import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Title = styled.p`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 15px;
  font-weight: 600;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6px;
`;

export const StyledField = styled(Field)`
  width: 1060px;
  height: 34px;
  padding: 4px 8px;
  color: ${props => props.theme.colors.textPrimary};
  border: transparent;
  border-radius: 8px;
  background: ${props => props.theme.colors.greyBackgroundPaper};

  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.colors.hoverColor};
  }
`;

export const StyledTextField = styled(Field)`
  width: 1060px;
  height: 102px;
  padding: 4px 8px;
  color: ${props => props.theme.colors.textPrimary};
  border: transparent;
  border-radius: 8px;
  background: ${props => props.theme.colors.greyBackgroundPaper};
  resize: vertical;

  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.colors.hoverColor};
  }
`;
