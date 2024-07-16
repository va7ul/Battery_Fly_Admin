import { RootState } from 'redux/store';

export const selectOneOrderIsLoading = (state: RootState) =>
  state.orders.oneOrder.isLoading;
export const selectOneOrderError = (state: RootState) =>
  state.orders.oneOrder.error;
export const selectOneOrder = (state: RootState) =>
  state.orders.oneOrder.result;

export const selectAllOrdersIsLoading = (state: RootState) =>
  state.orders.ordersList.isLoading;
export const selectAllOrdersError = (state: RootState) =>
  state.orders.ordersList.error;
export const selectAllOrders = (state: RootState) =>
  state.orders.ordersList.allOrders;
export const selectPrints3D = (state: RootState) =>
  state.orders.ordersList.prints3D;
export const selectQuickOrders = (state: RootState) =>
  state.orders.ordersList.quickOrders;
export const selectApplications = (state: RootState) =>
  state.orders.ordersList.applications;
