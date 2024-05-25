// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getPromoCodes } from '../redux/promoCodes/promoCodesOperations';
// import {
//   selectPromoCodesIsLoading,
//   selectPromoCodesError,
// } from '../redux/promoCodes/promoCodesSelectors';
// import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { PromoCodesTable } from 'components/PromoCodesPage/PromoCodesTable';

const PromoCodesPage = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectPromoCodesIsLoading);
  // const error = useSelector(selectPromoCodesError);

  // useEffect(() => {
  //   dispatch(getPromoCodes());
  // }, [dispatch]);

  return (
    <>
      {/* {isLoading && <CustomLoader />}
      {!isLoading && !error && <PromoCodesTable />} */}
      <PromoCodesTable />
    </>
  );
};

export default PromoCodesPage;
