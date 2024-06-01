import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
  const { orderId } = useParams();

  useEffect(() => {
    dispatch(getOneOrder(orderId));
  }, [dispatch, orderId]);

  return (
    <>
      {isLoading && <CustomLoader />}
      {!isLoading && !error && <OrderDetails />}
    </>
  );
};

export default OrderDetailsPage;
