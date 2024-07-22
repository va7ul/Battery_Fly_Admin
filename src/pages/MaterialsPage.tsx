import { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../redux/hooks';
import { getMaterials } from '../redux/products/productsOperations';
import { selectAllProductsIsLoading } from '../redux/products/productsSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ProductsTable } from 'components/Shared/ProductsTable/ProductsTable';

const MaterialsPage = () => {
  const dispatch = useTypedDispatch();
  const isLoading = useTypedSelector(selectAllProductsIsLoading);

  useEffect(() => {
    dispatch(getMaterials());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <CustomLoader isLoading={isLoading} />
      ) : (
        <ProductsTable category={'Розхідні матеріали'} />
      )}
    </>
  );
};

export default MaterialsPage;
