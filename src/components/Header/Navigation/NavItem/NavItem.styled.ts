import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Item = styled.li`
  font-size: 15px;
  font-weight: 600;
  border-top: 1px solid ${props => props.theme.colors.greyBackgroundPaper};
  border: none;
  padding: 0;

  &:nth-child(6) {
    margin-right: 6px;
  }

  &:nth-last-child(-n + 2) a {
    padding: 23.3px 0;
  }
  &:nth-last-child(-n + 2) button {
    padding: 23.3px 0;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 28px 0;
  cursor: pointer;
  color: ${props => props.theme.colors.textPrimary};

  &.active,
  :hover {
    color: ${props => props.theme.colors.hoverColor};
  }
`;

export const StyledTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
  padding: 28px 0;
  cursor: pointer;
  color: ${props => props.theme.colors.textPrimary};
  transition: ${props => props.theme.transition.main};

  &.active,
  :hover {
    color: ${props => props.theme.colors.hoverColor};

    svg {
      stroke: ${props => props.theme.colors.hoverColor};
      transform: rotate(270deg) scale(1.4);
    }
  }
`;
