import { AddProduct } from 'components/AddProductPage/AddProduct/AddProduct';
import { AddProductZbirky } from 'components/AddProductPage/AddProductZbirky/AddProductZbirky';
import { useParams } from 'react-router-dom';

const AddProductPage = () => {
  const { category, type, subType } = useParams();
    return subType === 'zbirka' ? <AddProductZbirky category={category} type={type} /> : <AddProduct category={category} type={type} />;
};

export default AddProductPage;
