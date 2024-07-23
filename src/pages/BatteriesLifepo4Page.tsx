import { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../redux/hooks';
import { getBatterieslifepo4 } from '../redux/products/productsOperations';
import { selectAllProductsIsLoading } from '../redux/products/productsSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ProductsTable } from 'components/Shared/ProductsTable/ProductsTable';

const TypeLifepo4Page = () => {
  const dispatch = useTypedDispatch();
  const isLoading = useTypedSelector(selectAllProductsIsLoading);

  useEffect(() => {
    dispatch(getBatterieslifepo4());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <CustomLoader isLoading={isLoading} />
      ) : (
        <ProductsTable category={'Акумулятори LiFePo4'} />
      )}
    </>
  );
};

export default TypeLifepo4Page;
