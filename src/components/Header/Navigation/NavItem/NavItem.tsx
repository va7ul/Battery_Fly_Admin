import { LinkProps } from 'react-router-dom';
import { Item, StyledLink } from './NavItem.styled';

type NavItemProps = {
  page: LinkProps['to'];
  title: string;
};

export const NavItem: React.FC<NavItemProps> = ({ title, page }) => {
  return (
    <Item>
      <StyledLink to={page}>{title}</StyledLink>
    </Item>
  );
};
