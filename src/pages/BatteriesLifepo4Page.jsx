import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBatterieslifepo4 } from '../redux/products/productsOperations';
import { selectAllOrdersIsLoading } from '../redux/orders/ordersSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ProductsTable } from 'components/Shared/ProductsTable/ProductsTable';

const TypeLifepo4Page = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAllOrdersIsLoading);

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
