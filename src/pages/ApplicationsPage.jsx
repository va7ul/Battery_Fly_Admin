import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApplications } from '../redux/orders/ordersOperations';
import { selectAllOrdersIsLoading } from '../redux/orders/ordersSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ApplicationsTable } from 'components/ApplicationsPage/ApplicationsTable';

const ApplicationsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAllOrdersIsLoading);

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
