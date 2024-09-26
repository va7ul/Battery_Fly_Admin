import { Banners } from 'components/BannersPage/Banners';
import { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../redux/hooks';
import { getHero } from '../redux/hero/heroOperations';
import { selectLoading } from '../redux/hero/heroSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';

const BannersPage = () => {
const dispatch = useTypedDispatch();
  const isLoading = useTypedSelector(selectLoading);

  useEffect(() => {
    dispatch(getHero());
  }, [dispatch]);

  return (
    <>{isLoading ? <CustomLoader isLoading={isLoading} /> : <Banners />}</>
  );
};

export default BannersPage;
