import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAssemblies } from '../redux/products/productsOperations';
import { useLoader } from 'utils/hooks';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ProductsTable } from 'components/Shared/ProductsTable/ProductsTable';

const AssembliesPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useLoader();

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
