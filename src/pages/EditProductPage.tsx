import { useTypedDispatch, useTypedSelector } from '../redux/hooks';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getOneProduct } from '../redux/products/productsOperations';
import { selectOneProduct, selectOneProductIsLoading } from '../redux/products/productsSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { EditProduct } from 'components/EditProductPage/EditProduct/EditProduct';
import { EditProductZbirky } from 'components/EditProductPage/EditProductZbirky/EditProductZbirky';

const EditProductPage = () => {
  const dispatch = useTypedDispatch();
  const isLoading = useTypedSelector(selectOneProductIsLoading);
  const { category } = useTypedSelector(selectOneProduct);
  const { cardId } = useParams();

  useEffect(() => {
    cardId && dispatch(getOneProduct(cardId));
  }, [dispatch, cardId]);

  const zbirka = ['assembly', 'fpv', 'transport', 'toys'];

  return (
    <>
      {isLoading ? (
        <CustomLoader isLoading={isLoading} />
      ) : category && zbirka.includes(category) ? (
        <EditProductZbirky />
      ) : (
        <EditProduct />
      )}
    </>
  );
};

export default EditProductPage;
