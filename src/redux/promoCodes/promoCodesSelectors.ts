import { RootState } from 'redux/store';

export const selectPromoCodesIsLoading = (state: RootState) =>
  state.promoCodes.isLoading;
export const selectPromoCodesError = (state: RootState) =>
  state.promoCodes.error;
export const selectPromoCodes = (state: RootState) =>
  state.promoCodes.promoCodes;
