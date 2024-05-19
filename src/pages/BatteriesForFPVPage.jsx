import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBatteriesForFPV } from '../redux/products/productsOperations';
import { useLoader } from 'utils/hooks';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ProductsTable } from 'components/Shared/ProductsTable/ProductsTable';

const BatteriesForFPVPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useLoader();

  useEffect(() => {
    dispatch(getBatteriesForFPV());
  }, [dispatch]);

  return (
    <>
      {isLoading && <CustomLoader />}
      {!isLoading && !error && (
        <ProductsTable category={'Батареї для FPV-дронів'} />
      )}
    </>
  );
};

export default BatteriesForFPVPage;
