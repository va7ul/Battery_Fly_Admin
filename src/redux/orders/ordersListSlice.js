import { createSlice } from '@reduxjs/toolkit';
import { getAllOrders } from './ordersOperations';

const initialState = {
  allOrders: [
    {
      _id: '660c0fe817a24c70c02f36a3',
      status: 'Нове',
      numberOfOrder: '100119',
      firstName: 'Vasyl',
      lastName: 'Podvirnyi',
      email: 'test@gmail.com',
      comment: '',
      tel: '+380962985515',
      total: 1016,
      promoCode: '',
      promoCodeDiscount: 0,
      discountValue: 0,
      together: 1016,
      cartItems: [{}, {}],
      delivery: 'Нова пошта',
      city: 'Ворзель',
      warehouse: 'Відділення №2 (до 10 кг): вул. Курортна, 23а',
      payment: 'Картою по реквізитах фізичних осіб',
      createdAt: '2024-04-02T14:02:16.429+00:00',
    },
  ],
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
  state.allOrders = action.payload.result;
};

const ordersListSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getAllOrders.pending, handlePending)
      .addCase(getAllOrders.rejected, handleRejected)
      .addCase(getAllOrders.fulfilled, handleFulfilled),
});

export const ordersListReducer = ordersListSlice.reducer;
