import { RootState } from 'redux/store';

export const selectOneProductIsLoading = state =>
  state.products.oneProduct.isLoading;
export const selectOneProductError = state => state.products.oneProduct.error;
export const selectOneProduct = state => state.products.oneProduct.result;

export const selectAllProductsIsLoading = (state: RootState) =>
  state.products.productsList.isLoading;
export const selectAllProductsError = (state: RootState) =>
  state.products.productsList.error;
export const selectProducts = (state: RootState) =>
  state.products.productsList.allProducts;
