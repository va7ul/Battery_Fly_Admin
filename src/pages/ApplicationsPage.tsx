import { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../redux/hooks';
import { getApplications } from '../redux/orders/ordersOperations';
import { selectAllOrdersIsLoading } from '../redux/orders/ordersSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ApplicationsTable } from 'components/ApplicationsPage/ApplicationsTable';

const ApplicationsPage = () => {
  const dispatch = useTypedDispatch();
  const isLoading = useTypedSelector(selectAllOrdersIsLoading);

  useEffect(() => {
    dispatch(getApplications());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <CustomLoader isLoading={isLoading} />
      ) : (
        <ApplicationsTable />
      )}
    </>
  );
};

export default ApplicationsPage;
