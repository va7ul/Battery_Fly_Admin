// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getPrints3D } from '../redux/orders/ordersOperations';
// import {
//   selectApplicationsIsLoading,
//   selectApplicationsError,
// } from '../redux/orders/ordersSelectors';
// import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { Prints3DTable } from 'components/Prints3DPage/Prints3DTable';

const Prins3DPage = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectAllOrdersIsLoading);
  // const error = useSelector(selectAllOrdersError);

  // useEffect(() => {
  //   dispatch(getPrints3D());
  // }, [dispatch]);

  return (
    <>
      {/* {isLoading && <CustomLoader />}
      {!isLoading && !error && <Prints3DTable />} */}
      <Prints3DTable />
    </>
  );
};

export default Prins3DPage;
