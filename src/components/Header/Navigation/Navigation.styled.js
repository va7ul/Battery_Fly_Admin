import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 28px 0;
  background-color: transparent;
  border: none;
  font-size: 15px;
  font-weight: 600;
  z-index: 2;
  color: ${props => props.theme.colors.backgroundPaper};
`;
