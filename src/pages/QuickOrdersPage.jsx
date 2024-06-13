import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuickOrders } from '../redux/orders/ordersOperations';
import { selectAllOrdersIsLoading } from '../redux/orders/ordersSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { QuickOrdersTable } from 'components/QuickOrdersPage/QuickOrdersTable';

const QuickOrdersPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAllOrdersIsLoading);

  useEffect(() => {
    dispatch(getQuickOrders());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <CustomLoader isLoading={isLoading} />
      ) : (
        <QuickOrdersTable />
      )}
    </>
  );
};

export default QuickOrdersPage;
