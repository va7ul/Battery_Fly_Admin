import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import {
  Order,
  Print3D,
  QuickOrder,
  Aplication,
} from '../../@types/orders.types';
import {
  getAllOrders,
  getPrints3D,
  getQuickOrders,
  getApplications,
} from './ordersOperations';

type InitialState = {
  allOrders: Order[];
  prints3D: Print3D[];
  quickOrders: QuickOrder[];
  applications: Aplication[];
  isLoading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  allOrders: [],
  prints3D: [],
  quickOrders: [],
  applications: [],
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

const handleAllOrderFulfilled = (
  state: InitialState,
  { payload }: PayloadAction<{ result: Order[] }>
) => {
  state.isLoading = false;
  state.error = null;
  state.allOrders = payload.result;
};

const handlePrins3DFulfilled = (
  state: InitialState,
  { payload }: PayloadAction<{ result: Print3D[] }>
) => {
  state.isLoading = false;
  state.error = null;
  state.prints3D = payload.result;
};

const handleQuickOrdersFulfilled = (
  state: InitialState,
  { payload }: PayloadAction<{ result: QuickOrder[] }>
) => {
  state.isLoading = false;
  state.error = null;
  state.quickOrders = payload.result;
};

const handleApplicationsFulfilled = (
  state: InitialState,
  { payload }: PayloadAction<{ result: Aplication[] }>
) => {
  state.isLoading = false;
  state.error = null;
  state.applications = payload.result;
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
