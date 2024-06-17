import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBatteriesForTransport } from '../redux/products/productsOperations';
import { selectAllProductsIsLoading } from '../redux/products/productsSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ProductsTable } from 'components/Shared/ProductsTable/ProductsTable';

const BatteriesForTransportPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAllProductsIsLoading);

  useEffect(() => {
    dispatch(getBatteriesForTransport());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <CustomLoader isLoading={isLoading} />
      ) : (
        <ProductsTable category={'Батареї для електротранспорту'} />
      )}
    </>
  );
};

export default BatteriesForTransportPage;
