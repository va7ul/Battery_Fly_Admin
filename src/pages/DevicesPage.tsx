import { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../redux/hooks';
import { getDevices } from '../redux/products/productsOperations';
import { selectAllProductsIsLoading } from '../redux/products/productsSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ProductsTable } from 'components/Shared/ProductsTable/ProductsTable';

const DevicesPage = () => {
  const dispatch = useTypedDispatch();
  const isLoading = useTypedSelector(selectAllProductsIsLoading);

  useEffect(() => {
    dispatch(getDevices());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <CustomLoader isLoading={isLoading} />
      ) : (
        <ProductsTable category={'Прилади'} />
      )}
    </>
  );
};

export default DevicesPage;
