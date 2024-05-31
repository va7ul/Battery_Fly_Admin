import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuickOrders } from '../redux/orders/ordersOperations';
import {
  selectAllOrdersIsLoading,
  // selectAllOrdersError,
} from '../redux/orders/ordersSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { QuickOrdersTable } from 'components/QuickOrdersPage/QuickOrdersTable';

const QuickOrdersPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAllOrdersIsLoading);
  // const error = useSelector(selectAllOrdersError);

  useEffect(() => {
    dispatch(getQuickOrders());
  }, [dispatch]);

  return (
    <>
      {isLoading && <CustomLoader />}
      {!isLoading  && <QuickOrdersTable />}
    </>
  );
};

export default QuickOrdersPage;
