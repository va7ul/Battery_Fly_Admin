// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getPrins3D } from '../redux/orders/ordersOperations';
// import {
//   selectApplicationsIsLoading,
//   selectApplicationsError,
// } from '../redux/orders/ordersSelectors';
// import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { Prins3DTable } from 'components/Prins3DPage/Prins3DTable';

const Prins3DPage = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectAllOrdersIsLoading);
  // const error = useSelector(selectAllOrdersError);

  // useEffect(() => {
  //   dispatch(getPrins3D());
  // }, [dispatch]);

  return (
    <>
      {/* {isLoading && <CustomLoader />}
      {!isLoading && !error && <Prins3DTable />} */}
      <Prins3DTable />
    </>
  );
};

export default Prins3DPage;
