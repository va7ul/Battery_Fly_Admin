import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBatteries18650 } from '../redux/products/productsOperations';
import { selectAllProductsIsLoading } from '../redux/products/productsSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ProductsTable } from 'components/Shared/ProductsTable/ProductsTable';

const Type18650Page = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAllProductsIsLoading);

  useEffect(() => {
    dispatch(getBatteries18650());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <CustomLoader isLoading={isLoading} />
      ) : (
        <ProductsTable category={'Акумулятори 18650'} />
      )}
    </>
  );
};

export default Type18650Page;
