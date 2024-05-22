import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneOrder } from '../redux/orders/ordersOperations';
import {
  selectOneOrderIsLoading,
  selectOneOrderError,
} from '../redux/orders/ordersSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { OrderDetails } from 'components/OrderDetailsPage/OrderDetails';

const OrderDetailsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectOneOrderIsLoading);
  const error = useSelector(selectOneOrderError);

  useEffect(() => {
    dispatch(getOneOrder());
  }, [dispatch]);

  return (
    <>
      {/* {isLoading && <CustomLoader />}
      {!isLoading && !error && <OrdersTable />} */}
      <OrderDetails />
    </>
  );
};

export default OrderDetailsPage;
