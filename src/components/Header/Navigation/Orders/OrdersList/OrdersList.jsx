import { ListItem } from '../../ListItem/ListItem';

export const OrdersList = () => {
  return (
    <ul>
      <ListItem
        page="/admin/orders/product-orders"
        title="Замовлення товарів"
      />
      <ListItem page="/admin/orders/prints-3D" title="3D друк" />
      <ListItem page="/admin/orders/quick-orders" title="Швидкі замовлення" />
      <ListItem page="/admin/orders/applications" title="Заявки" />
    </ul>
  );
};
