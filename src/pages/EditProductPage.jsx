import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getOneProduct } from '../redux/products/productsOperations';
import {
  selectOneProductError,
  selectOneProductIsLoading,
} from '../redux/products/productsSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { EditProduct } from 'components/EditProductPage/EditProduct';

const EditProductPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectOneProductIsLoading);
  const error = useSelector(selectOneProductError);
  const { cardId } = useParams();

  useEffect(() => {
    dispatch(getOneProduct(cardId));
  }, [dispatch, cardId]);

  return (
    <>
      {isLoading && <CustomLoader />}
      {!isLoading && !error && (
        <>
          <EditProduct />
         
        </>
      )}
    </>
  );
};

export default EditProductPage;
