import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBatteriesForTransport } from '../redux/products/productsOperations';
import { useLoader } from 'utils/hooks';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ProductsTable } from 'components/Shared/ProductsTable/ProductsTable';

const BatteriesForTransportPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useLoader();

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
