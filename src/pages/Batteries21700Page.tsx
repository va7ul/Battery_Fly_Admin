import { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../redux/hooks';
import { getBatteries21700 } from '../redux/products/productsOperations';
import { selectAllProductsIsLoading } from '../redux/products/productsSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ProductsTable } from 'components/Shared/ProductsTable/ProductsTable';

const Type21700Page = () => {
  const dispatch = useTypedDispatch();
  const isLoading = useTypedSelector(selectAllProductsIsLoading);

  useEffect(() => {
    dispatch(getBatteries21700());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <CustomLoader isLoading={isLoading} />
      ) : (
        <ProductsTable category={'Акумулятори 21700'} />
      )}
    </>
  );
};

export default Type21700Page;
