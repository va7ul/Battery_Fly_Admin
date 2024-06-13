import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBatterieslipo } from '../redux/products/productsOperations';
import { selectAllOrdersIsLoading } from '../redux/orders/ordersSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ProductsTable } from 'components/Shared/ProductsTable/ProductsTable';

const TypeLiPoPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAllOrdersIsLoading);

  useEffect(() => {
    dispatch(getBatterieslipo());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <CustomLoader isLoading={isLoading} />
      ) : (
        <ProductsTable category={'Акумулятори Li-Po'} />
      )}
    </>
  );
};

export default TypeLiPoPage;
