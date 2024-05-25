export const selectOneOrderIsLoading = state => state.orders.oneOrder.isLoading;
export const selectOneOrderError = state => state.orders.oneOrder.error;
export const selectOneOrder = state => state.orders.oneOrder.result;

export const selectAllOrdersIsLoading = state =>
  state.orders.ordersList.isLoading;
export const selectAllOrdersError = state => state.orders.ordersList.error;
export const selectAllOrders = state => state.orders.ordersList.allOrders;
export const selectPrints3D = state => state.orders.ordersList.prints3D;
export const selectQuickOrders = state => state.orders.ordersList.quickOrders;
export const selectApplications = state => state.orders.ordersList.applications;
