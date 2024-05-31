import { createSlice } from '@reduxjs/toolkit';
import { getCustomers } from '../customers/customersOperations';

const initialState = {
  customers: [],
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
