import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCustomers } from './customersOperations';
import { Customer } from '../../@types/customers.types';

type InitialState = {
  customers: Customer[];
  isLoading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  customers: [],
  isLoading: false,
  error: null,
};

const handlePending = (state: InitialState) => {
  state.isLoading = true;
};

const handleRejected = (
  state: InitialState,
  action: PayloadAction<string | undefined>
) => {
  state.isLoading = false;
  state.error = action.payload ?? 'Unknown error';
};

const handleFulfilled = (
  state: InitialState,
  action: PayloadAction<{ users: Customer[] }>
) => {
  state.isLoading = false;
  state.error = null;
  state.customers = action.payload.users;
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getCustomers.pending, handlePending)
      .addCase(getCustomers.rejected, handleRejected)
      .addCase(getCustomers.fulfilled, handleFulfilled),
});

export const customersReducer = customersSlice.reducer;
