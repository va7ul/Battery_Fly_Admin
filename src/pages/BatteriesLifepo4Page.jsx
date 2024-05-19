import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBatterieslifepo4 } from '../redux/products/productsOperations';
import { useLoader } from 'utils/hooks';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ProductsTable } from 'components/Shared/ProductsTable/ProductsTable';

const TypeLifepo4Page = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useLoader();

  useEffect(() => {
    dispatch(getBatterieslifepo4());
  }, [dispatch]);

  return (
    <>
      {isLoading && <CustomLoader />}
      {!isLoading && !error && (
        <ProductsTable category={'Акумулятори LiFePo4'} />
      )}
    </>
  );
};

export default TypeLifepo4Page;
