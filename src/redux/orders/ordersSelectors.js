export const selectOneOrderIsLoading = state => state.orders.oneOrder.isLoading;
export const selectOneOrderError = state => state.orders.oneOrder.error;
export const selectOneOrder = state => state.orders.oneOrder.result;

export const selectAllOrdersIsLoading = state =>
  state.orders.ordersList.isLoading;
export const selectAllOrdersError = state => state.orders.ordersList.error;
export const selectAllOrders = state => state.orders.ordersList.allOrders;
