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

const adminPersistConfig = {
  key: 'admin',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};

const productsReducer = combineReducers({
  oneProduct: oneProductReducer,
  productsList: productsListReducer,
});

export const store = configureStore({
  reducer: {
    admin: persistReducer(adminPersistConfig, adminReducer),
    products: productsReducer,
    customers: customersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
