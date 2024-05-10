import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from 'routes/PrivateRoute';
import { RestrictedRoute } from 'routes/RestrictedRoute';
import { Layout } from './components/Layout/Layout';
import { useAuth } from './utils/hooks';
import { refreshAdmin } from './redux/admin/adminOperations';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';

const lazyLoadPage = importPath => lazy(() => import(`./pages/${importPath}`));

const LoginPage = lazyLoadPage('LoginPage');
const OrdersPage = lazyLoadPage('OrdersPage');
const CustomersPage = lazyLoadPage('CustomersPage');
const AssortmentPage = lazyLoadPage('AssortmentPage');
const Print3DPage = lazyLoadPage('Print3DPage');
const BannersPage = lazyLoadPage('BannersPage');
const PromoCodesPage = lazyLoadPage('PromoCodesPage');

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshAdmin());
  }, [dispatch]);

  return isRefreshing ? (
    <CustomLoader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <RestrictedRoute
              redirectTo="/admin/orders"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="admin/orders"
          element={<PrivateRoute redirectTo="/" component={<OrdersPage />} />}
        />
        <Route
          path="admin/customers"
          element={
            <PrivateRoute redirectTo="/" component={<CustomersPage />} />
          }
        />
        <Route
          path="admin/assortment"
          element={
            <PrivateRoute redirectTo="/" component={<AssortmentPage />} />
          }
        />
        <Route
          path="admin/print-3D"
          element={<PrivateRoute redirectTo="/" component={<Print3DPage />} />}
        />
        <Route
          path="admin/banners"
          element={<PrivateRoute redirectTo="/" component={<BannersPage />} />}
        />
        <Route
          path="admin/promo-codes"
          element={
            <PrivateRoute redirectTo="/" component={<PromoCodesPage />} />
          }
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  );
};
