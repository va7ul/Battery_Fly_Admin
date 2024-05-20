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
const Batteries18650Page = lazyLoadPage('Batteries18650Page');
const Batteries21700Page = lazyLoadPage('Batteries21700Page');
const Batteries32650Page = lazyLoadPage('Batteries32650Page');
const BatteriesLiPoPage = lazyLoadPage('BatteriesLipoPage');
const BatteriesLifepo4Page = lazyLoadPage('BatteriesLifepo4Page');
const AssemblyPage = lazyLoadPage('AssembliesPage');
const BatteriesForFPVPage = lazyLoadPage('BatteriesForFPVPage');
const BatteriesForTransportPage = lazyLoadPage('BatteriesForTransportPage');
const BatteriesForToysPage = lazyLoadPage('BatteriesForToysPage');
const DevicesPage = lazyLoadPage('DevicesPage');
const MaterialsPage = lazyLoadPage('MaterialsPage');
const EditProductPage = lazyLoadPage('EditProductPage');
const AddProductPage = lazyLoadPage('AddProductPage');
const CustomersPage = lazyLoadPage('CustomersPage');
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
          path="admin/assortment/batteries-18650"
          element={
            <PrivateRoute redirectTo="/" component={<Batteries18650Page />} />
          }
        />
        <Route
          path="admin/assortment/batteries-21700"
          element={
            <PrivateRoute redirectTo="/" component={<Batteries21700Page />} />
          }
        />
        <Route
          path="admin/assortment/batteries-32650"
          element={
            <PrivateRoute redirectTo="/" component={<Batteries32650Page />} />
          }
        />
        <Route
          path="admin/assortment/batteries-li-po"
          element={
            <PrivateRoute redirectTo="/" component={<BatteriesLiPoPage />} />
          }
        />
        <Route
          path="admin/assortment/batteries-lifepo4"
          element={
            <PrivateRoute redirectTo="/" component={<BatteriesLifepo4Page />} />
          }
        />
        <Route
          path="admin/assortment/assembly"
          element={<PrivateRoute redirectTo="/" component={<AssemblyPage />} />}
        />
        <Route
          path="admin/assortment/batteries-for-fpv"
          element={
            <PrivateRoute redirectTo="/" component={<BatteriesForFPVPage />} />
          }
        />
        <Route
          path="admin/assortment/batteries-for-transport"
          element={
            <PrivateRoute
              redirectTo="/"
              component={<BatteriesForTransportPage />}
            />
          }
        />
        <Route
          path="admin/assortment/batteries-for-toys"
          element={
            <PrivateRoute redirectTo="/" component={<BatteriesForToysPage />} />
          }
        />
        <Route
          path="admin/assortment/devices"
          element={<PrivateRoute redirectTo="/" component={<DevicesPage />} />}
        />
        <Route
          path="admin/assortment/materials"
          element={
            <PrivateRoute redirectTo="/" component={<MaterialsPage />} />
          }
        />
        <Route
          path="admin/assortment/:cardId"
          element={
            <PrivateRoute redirectTo="/" component={<EditProductPage />} />
          }
        />
        <Route
          path="admin/assortment/:category/:type/:subType"
          element={
            <PrivateRoute redirectTo="/" component={<AddProductPage />} />
          }
        />
        <Route
          path="admin/customers"
          element={
            <PrivateRoute redirectTo="/" component={<CustomersPage />} />
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
