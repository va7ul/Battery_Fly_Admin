import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getAssortment,
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
} from '../products/productsOperations';

const initialState = {
  allProducts: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.allProducts = action.payload.result;
};

const handleDeleteFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.allProducts = state.allProducts.filter(
    el => el.codeOfGood !== action.payload.id
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
