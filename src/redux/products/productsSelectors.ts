import { RootState } from 'redux/store';

export const selectOneProductIsLoading = (state: RootState) =>
  state.products.oneProduct.isLoading;
export const selectOneProductError = (state: RootState) =>
  state.products.oneProduct.error;
export const selectOneProduct = (state: RootState) =>
  state.products.oneProduct.result;

export const selectAllProductsIsLoading = (state: RootState) =>
  state.products.productsList.isLoading;
export const selectAllProductsError = (state: RootState) =>
  state.products.productsList.error;
export const selectProducts = (state: RootState) =>
  state.products.productsList.allProducts;
