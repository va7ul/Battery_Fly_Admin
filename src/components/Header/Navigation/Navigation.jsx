import { NavList } from './Navigation.styled';
import { NavItem } from './NavItem/NavItem';
// import { Assortment } from './Assortment/Assortment';

export const Navigation = () => {
  return (
    <nav>
      <NavList>
        <NavItem page="/admin/orders" title="Замовлення" />
        <NavItem page="/admin/customers" title="Клієнти" />
        {/* <Assortment /> */}
        <NavItem page="/admin/print-3D" title="3D друк" />
        <NavItem page="/admin/banners" title="Банери" />
        <NavItem page="/admin/promo-codes" title="Промокоди" />
      </NavList>
    </nav>
  );
};
