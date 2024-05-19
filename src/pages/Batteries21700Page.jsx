import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBatteries21700 } from '../redux/products/productsOperations';
import { useLoader } from 'utils/hooks';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ProductsTable } from 'components/Shared/ProductsTable/ProductsTable';

const Type21700Page = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useLoader();

  useEffect(() => {
    dispatch(getBatteries21700());
  }, [dispatch]);

  return (
    <>
      {isLoading && <CustomLoader />}
      {!isLoading && !error && <ProductsTable category={'Акумулятори 21700'} />}
    </>
  );
};

export default Type21700Page;
