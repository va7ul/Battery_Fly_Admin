import { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../redux/hooks';
import { getPromoCodes } from '../redux/promoCodes/promoCodesOperations';
import { selectPromoCodesIsLoading } from '../redux/promoCodes/promoCodesSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { PromoCodesTable } from 'components/PromoCodesPage/PromoCodesTable';

const PromoCodesPage = () => {
  const dispatch = useTypedDispatch();
  const isLoading = useTypedSelector(selectPromoCodesIsLoading);

  useEffect(() => {
    dispatch(getPromoCodes());
  }, [dispatch]);

  return <>{isLoading ? <CustomLoader /> : <PromoCodesTable />}</>;
};

export default PromoCodesPage;
