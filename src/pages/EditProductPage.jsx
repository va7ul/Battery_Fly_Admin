import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getOneProduct } from '../redux/products/productsOperations';
import {
  selectOneProductError,
  selectOneProductIsLoading,
} from '../redux/products/productsSelectors';
import { selectOneProduct } from '../redux/products/productsSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { EditProduct } from 'components/EditProductPage/EditProduct/EditProduct';
import { EditProductZbirky } from 'components/EditProductPage/EditProductZbirky/EditProductZbirky';

const EditProductPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectOneProductIsLoading);
  const error = useSelector(selectOneProductError);
  const { category } = useSelector(selectOneProduct)
  const { cardId } = useParams();
  
  useEffect(() => {
    dispatch(getOneProduct(cardId));
  }, [dispatch, cardId]);

  const zbirka = ['assembly', 'fpv', 'transport', 'toys']

  return (
    <>
      {isLoading && <CustomLoader />}
      {!isLoading && !error && (
        <>
          {zbirka.includes(category) ? <EditProductZbirky /> : <EditProduct />}
        </>
      )}
    </>
  );
};

export default EditProductPage;
