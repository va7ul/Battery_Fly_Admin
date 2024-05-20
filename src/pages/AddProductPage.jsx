import { AddProduct } from 'components/AddProductPage/AddProduct';
import { useParams } from 'react-router-dom';

const AddProductPage = () => {
  const { category, type, subType } = useParams();
  console.log(category, type, subType);

    return subType === 'zbirka' ? <>Твій компонент для збірки</> : <AddProduct category={category} type={type} />;
};

export default AddProductPage;
