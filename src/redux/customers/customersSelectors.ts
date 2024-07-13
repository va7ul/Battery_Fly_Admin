import { RootState } from 'redux/store';

export const selectCustomersIsLoading = (state: RootState) =>
  state.customers.isLoading;
export const selectCustomersError = (state: RootState) => state.customers.error;
export const selectCustomers = (state: RootState) => state.customers.customers;
