import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { adminReducer } from './admin/adminSlice';
import { oneProductReducer } from './products/oneProductSlice';
import { productsListReducer } from './products/productsListSlice';
import { customersReducer } from './customers/customersSlice';
import { oneOrderReducer } from './orders/oneOrderSlice';
import { ordersListReducer } from './orders/ordersListSlice';
import { promoCodesReducer } from './promoCodes/promoCodesSlice';
import { heroReducer } from './hero/heroSlice';

const adminPersistConfig = {
  key: 'admin',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};

const persistedAdminReducer = persistReducer(adminPersistConfig, adminReducer);

const productsReducer = combineReducers({
  oneProduct: oneProductReducer,
  productsList: productsListReducer,
});

const ordersReducer = combineReducers({
  oneOrder: oneOrderReducer,
  ordersList: ordersListReducer,
});

export const store = configureStore({
  reducer: {
    admin: persistedAdminReducer,
    products: productsReducer,
    customers: customersReducer,
    orders: ordersReducer,
    promoCodes: promoCodesReducer,
    hero: heroReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
