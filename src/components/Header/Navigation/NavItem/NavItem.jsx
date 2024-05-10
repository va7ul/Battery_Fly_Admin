import { Item, StyledLink } from './NavItem.styled';

export const NavItem = ({ title, page }) => {
  return (
    <Item>
      <StyledLink to={page}>{title}</StyledLink>
    </Item>
  );
};
