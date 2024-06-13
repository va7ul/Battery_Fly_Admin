import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPromoCodes } from '../redux/promoCodes/promoCodesOperations';
import { selectPromoCodesIsLoading } from '../redux/promoCodes/promoCodesSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { PromoCodesTable } from 'components/PromoCodesPage/PromoCodesTable';

const PromoCodesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectPromoCodesIsLoading);

  useEffect(() => {
    dispatch(getPromoCodes());
  }, [dispatch]);

  return <>{isLoading ? <CustomLoader /> : <PromoCodesTable />}</>;
};

export default PromoCodesPage;
