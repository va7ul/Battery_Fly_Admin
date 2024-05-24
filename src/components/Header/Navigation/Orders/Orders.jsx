import { StyledTitle } from '../NavItem/NavItem.styled';
import sprite from '../../../../assets/images/sprite.svg';
import { Item } from '../NavItem/NavItem.styled';
import { ArrowButton } from './Orders.styled';
import { useState } from 'react';
import { Menu } from '@mui/material';
import { OrdersList } from './OrdersList/OrdersList';

export const Orders = () => {
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Item>
      <StyledTitle onClick={handleClick}>
        Замовлення та заявки
        <ArrowButton
          type="button"
          handleopen={anchorEl}
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
        <OrdersList />
      </Menu>
    </Item>
  );
};
