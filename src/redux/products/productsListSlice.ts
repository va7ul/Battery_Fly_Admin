import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import {
  getAssortment,
  getProducts,
  getBatteries18650,
  getBatteries21700,
  getBatteries32650,
  getBatterieslipo,
  getBatterieslifepo4,
  getAssemblies,
  getBatteriesForFPV,
  getBatteriesForTransport,
  getBatteriesForToys,
  getDevices,
  getMaterials,
  deleteProduct,
  deleteProductZbirky,
} from './productsOperations';
import { Product, ProductZbirky } from '../../@types/products.types';

type InitialState = {
  allProducts: (Product | ProductZbirky)[];
  isLoading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  allProducts: [],
  isLoading: false,
  error: null,
};

const handlePending = (state: InitialState) => {
  state.isLoading = true;
};

const handleRejected = (
  state: InitialState,
  { payload }: PayloadAction<string | undefined>
) => {
  state.isLoading = false;
  state.error = payload ?? 'Unknown error';
};

const handleFulfilled = (
  state: InitialState,
  { payload }: PayloadAction<{ result: (Product | ProductZbirky)[] }>
) => {
  state.isLoading = false;
  state.error = null;
  state.allProducts = payload.result;
};

const handleDeleteFulfilled = (
  state: InitialState,
  { payload }: PayloadAction<{ id: string }>
) => {
  state.isLoading = false;
  state.error = null;
  state.allProducts = state.allProducts.filter(
    el => el.codeOfGood !== payload.id
  );
};

const productsListSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addMatcher(
        isAnyOf(
          getAssortment.pending,
          getProducts.pending,
          getBatteries18650.pending,
          getBatteries21700.pending,
          getBatteries32650.pending,
          getBatterieslipo.pending,
          getBatterieslifepo4.pending,
          getAssemblies.pending,
          getBatteriesForFPV.pending,
          getBatteriesForTransport.pending,
          getBatteriesForToys.pending,
          getDevices.pending,
          getMaterials.pending,
          deleteProduct.pending,
          deleteProductZbirky.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getAssortment.rejected,
          getProducts.rejected,
          getBatteries18650.rejected,
          getBatteries21700.rejected,
          getBatteries32650.rejected,
          getBatterieslipo.rejected,
          getBatterieslifepo4.rejected,
          getAssemblies.rejected,
          getBatteriesForFPV.rejected,
          getBatteriesForTransport.rejected,
          getBatteriesForToys.rejected,
          getDevices.rejected,
          getMaterials.rejected,
          deleteProduct.rejected,
          deleteProductZbirky.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          getAssortment.fulfilled,
          getProducts.fulfilled,
          getBatteries18650.fulfilled,
          getBatteries21700.fulfilled,
          getBatteries32650.fulfilled,
          getBatterieslipo.fulfilled,
          getBatterieslifepo4.fulfilled,
          getAssemblies.fulfilled,
          getBatteriesForFPV.fulfilled,
          getBatteriesForTransport.fulfilled,
          getBatteriesForToys.fulfilled,
          getDevices.fulfilled,
          getMaterials.fulfilled
        ),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(deleteProduct.fulfilled, deleteProductZbirky.fulfilled),
        handleDeleteFulfilled
      ),
});

export const productsListReducer = productsListSlice.reducer;
