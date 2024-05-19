import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBatteries32650 } from '../redux/products/productsOperations';
import { useLoader } from 'utils/hooks';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ProductsTable } from 'components/Shared/ProductsTable/ProductsTable';

const Type32650Page = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useLoader();

  useEffect(() => {
    dispatch(getBatteries32650());
  }, [dispatch]);

  return (
    <>
      {isLoading && <CustomLoader />}
      {!isLoading && !error && <ProductsTable category={'Акумулятори 32650'} />}
    </>
  );
};

export default Type32650Page;
