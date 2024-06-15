import { Banners } from 'components/BannersPage/Banners';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHero } from '../redux/hero/heroOperations';
import { selectLoading } from '../redux/hero/heroSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';

const BannersPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getHero());
  }, [dispatch]);

  return (
    <>{isLoading ? <CustomLoader isLoading={isLoading} /> : <Banners />}</>
  );
};

export default BannersPage;
