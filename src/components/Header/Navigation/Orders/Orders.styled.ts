import styled from 'styled-components';
import { getRotation } from 'styles/GlobalStyled';

export const ArrowButton = styled.button<{ handleOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  outline: none;
  border: none;

  & svg {
    transform: ${getRotation};
    width: 11px;
    height: 11px;
    fill: transparent;
    stroke: ${props => props.theme.colors.textPrimary};
    transition: ${props => props.theme.transition.main};
  }
  &:hover svg {
    stroke: ${props => props.theme.colors.hoverColor};
    transform: rotate(270deg) scale(1.4);
  }
`;
