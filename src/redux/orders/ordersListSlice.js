import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getAllOrders,
  getPrints3D,
  getQuickOrders,
  getApplications,
} from './ordersOperations';

const initialState = {
  allOrders: [],
  prints3D: [],
  quickOrders: [],
  applications: [],
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

const handleAllOrderFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.allOrders = action.payload.result;
};

const handlePrins3DFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.prints3D = action.payload.result;
};

const handleQuickOrdersFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.quickOrders = action.payload.result;
};

const handleApplicationsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.applications = action.payload.result;
};

const ordersListSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getAllOrders.fulfilled, handleAllOrderFulfilled)
      .addCase(getPrints3D.fulfilled, handlePrins3DFulfilled)
      .addCase(getQuickOrders.fulfilled, handleQuickOrdersFulfilled)
      .addCase(getApplications.fulfilled, handleApplicationsFulfilled)
      .addMatcher(
        isAnyOf(
          getAllOrders.pending,
          getPrints3D.pending,
          getQuickOrders.pending,
          getApplications.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getAllOrders.rejected,
          getPrints3D.rejected,
          getQuickOrders.rejected,
          getApplications.rejected
        ),
        handleRejected
      ),
});

export const ordersListReducer = ordersListSlice.reducer;
