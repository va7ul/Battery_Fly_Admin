import { RootState } from 'redux/store';

export const selectLogin = (state: RootState) => state.admin.login;
export const selectIsLoggedIn = (state: RootState) => state.admin.isLoggedIn;
export const selectIsRefreshing = (state: RootState) =>
  state.admin.isRefreshing;
export const selectIsLoading = (state: RootState) => state.admin.isLoading;
export const selectErrorStatus = (state: RootState) => state.admin.errorStatus;
