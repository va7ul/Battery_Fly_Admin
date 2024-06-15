import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 478px;
  gap: 30px;
  margin-top: 300px;
  margin-left: auto;
  margin-right: auto;
`;

export const Btn = styled.button`
  max-width: 200px;
  padding: 16px 62px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  border: none;
  font-size: 24px;
  font-weight: 400;
  background: ${props => props.theme.colors.secondary};

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.hoverColor};
  }
`;

export const ForgotPasswordBtn = styled.button`
  font-size: 20px;
  font-weight: 500;
  background-color: transparent;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.hoverColor};
  }
`;
