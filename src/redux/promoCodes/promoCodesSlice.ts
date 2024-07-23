import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import {
  getPromoCodes,
  addPromoCode,
  updatePromoCode,
  deletePromoCode,
} from './promoCodesOperations';
import { PromoCode } from '../../@types/promoCodes.types';

type InitialState = {
  promoCodes: PromoCode[];
  isLoading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  promoCodes: [],
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

const handleGetPromoFulfilled = (
  state: InitialState,
  { payload }: PayloadAction<{ promo: PromoCode[] }>
) => {
  state.isLoading = false;
  state.error = null;
  state.promoCodes = payload.promo;
};

const handleAddPromoFulfilled = (
  state: InitialState,
  { payload }: PayloadAction<{ promo: PromoCode }>
) => {
  state.isLoading = false;
  state.error = null;
  state.promoCodes.unshift(payload.promo);
};

const handleUpdatePromoFulfilled = (
  state: InitialState,
  { payload }: PayloadAction<{ promo: PromoCode }>
) => {
  state.isLoading = false;
  state.error = null;
  state.promoCodes = state.promoCodes.map(el => {
    if (el._id === payload.promo._id) {
      return payload.promo;
    }
    return el;
  });
};

const handleDeletePromoFulfilled = (
  state: InitialState,
  { payload }: PayloadAction<{ id: string }>
) => {
  state.isLoading = false;
  state.error = null;
  state.promoCodes = state.promoCodes.filter(el => el._id !== payload.id);
};

const promoCodesSlice = createSlice({
  name: 'promoCodes',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getPromoCodes.fulfilled, handleGetPromoFulfilled)
      .addCase(addPromoCode.fulfilled, handleAddPromoFulfilled)
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
