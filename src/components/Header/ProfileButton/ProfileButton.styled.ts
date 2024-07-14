import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  border-radius: 10px;
  padding: 7px;
  min-width: 112px;
  gap: 6px;
  background-color: ${props => props.theme.colors.secondary};
  transition: ${props => props.theme.transition.main};

  &:hover {
    background-color: ${props => props.theme.colors.hoverColor};
  }
`;
