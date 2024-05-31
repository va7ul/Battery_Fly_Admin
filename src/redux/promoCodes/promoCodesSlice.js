import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getPromoCodes,
  addPromoCode,
  updatePromoCode,
  deletePromoCode,
} from '../promoCodes/promoCodesOperations';

const initialState = {
  promoCodes: [],
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

const handleGetPromoFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.promoCodes = action.payload.promo;
};

const handleAdPromoFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.promoCodes.unshift(action.payload.promo);
};

const handleUpdatePromoFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.promoCodes = state.promoCodes.map(el => {
    if (el._id === action.payload.promo._id) {
      return action.payload.promo;
    }
    return el;
  });
};

const handleDeletePromoFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.promoCodes = state.promoCodes.filter(
    el => el._id !== action.payload.id
  );
};

const promoCodesSlice = createSlice({
  name: 'promoCodes',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getPromoCodes.fulfilled, handleGetPromoFulfilled)
      .addCase(addPromoCode.fulfilled, handleAdPromoFulfilled)
      .addCase(updatePromoCode.fulfilled, handleUpdatePromoFulfilled)
      .addCase(deletePromoCode.fulfilled, handleDeletePromoFulfilled)
      .addMatcher(
        isAnyOf(
          getPromoCodes.pending,
          addPromoCode.pending,
          updatePromoCode.pending,
          deletePromoCode.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getPromoCodes.rejected,
          addPromoCode.rejected,
          updatePromoCode.rejected,
          deletePromoCode.rejected
        ),
        handleRejected
      ),
});

export const promoCodesReducer = promoCodesSlice.reducer;
