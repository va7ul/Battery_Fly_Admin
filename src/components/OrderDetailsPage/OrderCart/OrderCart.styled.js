import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  grid-row: 1/4;
  margin-right: 10px;
`;

export const StyledImage = styled.img`
  width: 90px;
  height: 90px;
`;

export const StyledName = styled(Link)`
  grid-row: 1/3;
  height: 54px;
  overflow: hidden;
  color: ${props => props.theme.colors.hoverColor};
`;

export const CapacityWrap = styled.div`
  grid-column: 2/6;
  display: flex;
  align-items: center;
  margin-right: auto;
  gap: 10px;
  font-size: 11px;
`;

export const Capacity = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  color: rgb(99, 99, 99);

  svg {
    width: 19px;
    height: 19px;
  }
`;

export const SealingHolders = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  svg {
    color: ${props => props.theme.colors.success};
    width: 16px;
    height: 16px;
  }
`;
