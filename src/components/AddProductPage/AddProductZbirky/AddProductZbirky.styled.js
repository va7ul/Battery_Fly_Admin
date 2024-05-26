import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const Container = styled.div`
  padding: 40px 110px;
`;

export const Subtitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.theme.colors.hoverColor};
`;

export const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
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

export const LabelCapacity = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
  font-weight: 600;
  margin-left: 20px;
`;

export const BoxField = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

export const BoxCapacity = styled.div`
  display: flex;
  flex-direction: column;
  border: dashed grey;
  padding: 10px;
  gap: 10px;
`;

export const Input = styled.input`
  background: ${props => props.theme.colors.greyBackgroundPaper};
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
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

export const CapacityField = styled(Field)`
  width: 1000px;
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
  height: 170px;
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

export const CapacityTextField = styled(Field)`
  width: 1000px;
  height: 150px;
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

  &:hover {
    background: ${props => props.theme.colors.hoverColor};
  }
`;

export const AddButton = styled.button`
  width: 170px;
  height: 30px;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  background: ${props => props.theme.colors.secondary};
  margin-bottom: 10px;

  &:hover {
    background: ${props => props.theme.colors.hoverColor};
  }
`;

export const DeleteButton = styled.button`
  width: 170px;
  height: 30px;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  background: ${props => props.theme.colors.secondary};
  margin-right: 20px;
  margin-left: auto;

  &:hover {
    background: ${props => props.theme.colors.hoverColor};
  }
`;
