import styled from 'styled-components';

export const SubmitButton = styled.button`
  width: 200px;
  height: 60px;
  padding: 18px 30px;
  border-radius: 12px;
  border: none;
  font-size: 20px;
  font-weight: 500;
  background: ${props => props.theme.colors.secondary};

  &:hover {
    background: ${props => props.theme.colors.hoverColor};
  }
`;

export const BackButton = styled.button`
  width: 200px;
  height: 60px;
  padding: 18px 30px;
  border-radius: 12px;
  border: none;
  font-size: 20px;
  font-weight: 500;
  background: ${props => props.theme.colors.secondary};

  &:hover {
    background: ${props => props.theme.colors.hoverColor};
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
