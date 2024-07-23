import { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../redux/hooks';
import { getBatteriesForToys } from '../redux/products/productsOperations';
import { selectAllProductsIsLoading } from '../redux/products/productsSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ProductsTable } from 'components/Shared/ProductsTable/ProductsTable';

const BatteriesForToysPage = () => {
  const dispatch = useTypedDispatch();
  const isLoading = useTypedSelector(selectAllProductsIsLoading);

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
