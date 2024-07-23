import { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../redux/hooks';
import { getQuickOrders } from '../redux/orders/ordersOperations';
import { selectAllOrdersIsLoading } from '../redux/orders/ordersSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { QuickOrdersTable } from 'components/QuickOrdersPage/QuickOrdersTable';

const QuickOrdersPage = () => {
  const dispatch = useTypedDispatch();
  const isLoading = useTypedSelector(selectAllOrdersIsLoading);

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
