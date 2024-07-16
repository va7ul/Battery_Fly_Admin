import { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../redux/hooks';
import { getAllOrders } from '../redux/orders/ordersOperations';
import { selectAllOrdersIsLoading } from '../redux/orders/ordersSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { OrdersTable } from 'components/OrdersPage/OrdersTable';

const OrdersPage = () => {
  const dispatch = useTypedDispatch();
  const isLoading = useTypedSelector(selectAllOrdersIsLoading);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  return (
    <>{isLoading ? <CustomLoader isLoading={isLoading} /> : <OrdersTable />}</>
  );
};

export default OrdersPage;
