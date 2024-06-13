import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../redux/orders/ordersOperations';
import { selectAllOrdersIsLoading } from '../redux/orders/ordersSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { OrdersTable } from 'components/OrdersPage/OrdersTable';

const OrdersPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAllOrdersIsLoading);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  return (
    <>{isLoading ? <CustomLoader isLoading={isLoading} /> : <OrdersTable />}</>
  );
};

export default OrdersPage;
