import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBatteriesForToys } from '../redux/products/productsOperations';
import { useLoader } from 'utils/hooks';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ProductsTable } from 'components/Shared/ProductsTable/ProductsTable';

const BatteriesForToysPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useLoader();

  useEffect(() => {
    dispatch(getBatteriesForToys());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <CustomLoader isLoading={isLoading} />
      ) : (
        <ProductsTable category={'Батареї для іграшок'} />
      )}
    </>
  );
};

export default BatteriesForToysPage;
