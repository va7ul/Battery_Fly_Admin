import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAssemblies } from '../redux/products/productsOperations';
import { selectAllProductsIsLoading } from '../redux/products/productsSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ProductsTable } from 'components/Shared/ProductsTable/ProductsTable';

const AssembliesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAllProductsIsLoading);

  useEffect(() => {
    dispatch(getAssemblies());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <CustomLoader isLoading={isLoading} />
      ) : (
        <ProductsTable category={'Готові батареї'} />
      )}
    </>
  );
};

export default AssembliesPage;
