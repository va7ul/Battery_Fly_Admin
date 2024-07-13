import { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../redux/hooks';
import { getCustomers } from '../redux/customers/customersOperations';
import { selectCustomersIsLoading } from '../redux/customers/customersSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { CustomersTable } from 'components/CustomersPage/CustomersTable';

const CustomersPage = () => {
  const dispatch = useTypedDispatch();

  const isLoading = useTypedSelector(selectCustomersIsLoading);

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);

  return (
    <>
      {isLoading ? <CustomLoader isLoading={isLoading} /> : <CustomersTable />}
    </>
  );
};

export default CustomersPage;
