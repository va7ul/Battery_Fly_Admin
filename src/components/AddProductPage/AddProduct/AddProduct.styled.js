import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const Container = styled.div`
  padding: 40px 110px;
`;

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
  font-size: 16px;
  font-weight: 600;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
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

export const StyledErrorMessage = styled(ErrorMessage)`
  color: ${props => props.theme.colors.error};
  font-size: 12px;
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

export const SubmitButton = styled.button`
  width: 200px;
  height: 60px;
  padding: 18px 30px;
  border-radius: 12px;
  border: none;
  font-size: 20px;
  font-weight: 500;
  background: ${props => props.theme.colors.secondary};
  margin-left: auto;

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.hoverColor};
  }
`;
