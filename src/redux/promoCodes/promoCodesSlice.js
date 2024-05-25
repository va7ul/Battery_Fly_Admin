import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getPromoCodes,
  addPromoCode,
  updatePromoCode,
  deletePromoCode,
} from '../promoCodes/promoCodesOperations';

const initialState = {
  promoCodes: [
    {
      _id: '662e4d87b7322ab63b9d14cd',
      discount: 10,
      valid: true,
      name: 'HelloWorld',
      createdAt: '2024-04-02T14:02:16.429+00:00',
    },
  ],
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
  state.promoCodes = action.payload.result;
};

const promoCodesSlice = createSlice({
  name: 'promoCodes',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getPromoCodes.fulfilled, handleFulfilled)
      // .addCase(addPromoCode.fulfilled, handleFulfilled)
      // .addCase(updatePromoCode.fulfilled, handleFulfilled)
      // .addCase(deletePromoCode.fulfilled, handleFulfilled)
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
