import { NavList } from './Navigation.styled';
import { NavItem } from './NavItem/NavItem';
import { Orders } from './Orders/Orders';
import { Assortment } from './Assortment/Assortment';

export const Navigation = () => {
  return (
    <nav>
      <NavList>
        <Orders />
        <Assortment />
        <NavItem page="/admin/customers" title="Клієнти" />
        <NavItem page="/admin/banners" title="Банери" />
        <NavItem page="/admin/promo-codes" title="Промокоди" />
      </NavList>
    </nav>
  );
};
