import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomers } from '../redux/customers/customersOperations';
import {
  selectCustomersIsLoading,
  selectCustomersError,
} from '../redux/customers/customersSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { CustomersTable } from 'components/CustomersPage/CustomersTable';

const CustomersPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectCustomersIsLoading);
  const error = useSelector(selectCustomersError);

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);

  return (
    <>
      {isLoading && <CustomLoader />}
      {!isLoading && !error && <CustomersTable />}
      <CustomersTable />
    </>
  );
};

export default CustomersPage;
