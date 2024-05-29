import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
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
  let navigate = useNavigate();

  const getBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getOneProduct(cardId));
  }, [dispatch, cardId]);

  return (
    <>
      {isLoading && <CustomLoader />}
      {!isLoading && !error && (
        <>
          <EditProduct />
          <button onClick={getBack}>Назад</button>
        </>
      )}
    </>
  );
};

export default EditProductPage;
