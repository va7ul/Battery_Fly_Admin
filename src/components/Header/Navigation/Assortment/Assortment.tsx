import { useState, MouseEvent } from 'react';
import { Menu } from '@mui/material';
import sprite from '../../../../assets/images/sprite.svg';
import { AssortmentList } from './AssortmentList/AssortmentList';
import { ArrowButton } from './Assortment.styled';
import { Item, StyledTitle } from '../NavItem/NavItem.styled';

export const Assortment = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Item>
      <StyledTitle onClick={handleClick}>
        Товари
        <ArrowButton
          type="button"
          handleOpen={open}
          onClick={handleClick}
          aria-owns={open ? 'desktop-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <svg>
            <use href={`${sprite}#arrow-left`}></use>
          </svg>
        </ArrowButton>
      </StyledTitle>

      <Menu
        id="desktop-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        sx={{
          '& .MuiMenu-paper': {
            bgcolor: 'background.default',
            width: '414px',
            pl: '24px',
            pr: '24px',
            borderRadius: '18px',
          },
        }}
      >
        <AssortmentList />
      </Menu>
    </Item>
  );
};
