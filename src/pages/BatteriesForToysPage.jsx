import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBatteriesForToys } from '../redux/products/productsOperations';
import { selectAllProductsIsLoading } from '../redux/products/productsSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ProductsTable } from 'components/Shared/ProductsTable/ProductsTable';

const BatteriesForToysPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAllProductsIsLoading);

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
