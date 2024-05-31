import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../redux/orders/ordersOperations';
import {
  selectAllOrdersIsLoading,
  selectAllOrdersError,
} from '../redux/orders/ordersSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { OrdersTable } from 'components/OrdersPage/OrdersTable';

const OrdersPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAllOrdersIsLoading);
  const error = useSelector(selectAllOrdersError);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  return (
    <>
      {isLoading && <CustomLoader />}
      {!isLoading && !error && <OrdersTable />}
    </>
  );
};

export default OrdersPage;
