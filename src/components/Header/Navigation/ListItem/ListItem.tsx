import { LinkProps } from 'react-router-dom';
import { Item, StyledLink } from './ListItem.styled';

type ListItemProps = {
  page: LinkProps['to'];
  title: string;
};

export const ListItem: React.FC<ListItemProps> = ({ page, title }) => {
  return (
    <Item>
      <StyledLink to={page}>{title}</StyledLink>
    </Item>
  );
};
