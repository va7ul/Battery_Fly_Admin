import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getAllOrders,
  getPrins3D,
  getQuickOrders,
  getApplications,
} from './ordersOperations';

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
  prins3D: [
    {
      _id: '6648bec7654560bb58fbccc1',
      numberOfOrder: '100121',
      userName: 'Dima',
      tel: '380503357040',
      text: '',
      accuracy: '100 мікрон',
      plactic: 'PLA',
      color: 'Чорний',
      createdAt: '2024-05-18T14:44:23.539+00:00',
    },
  ],
  quickOrders: [
    {
      _id: '66366ac27e0b9a9a8adf44eb',
      numberOfOrder: '100060',
      codeOfGood: '1021',
      name: 'Акумулятор 32700 LiFePO4 Lii-70A 7000 мАч 30A 3.2V PVC 1 шт Blue',
      tel: '+380503333333',
      userName: 'Дмитро',
      createdAt: '2024-05-04T17:05:06.179+00:00',
    },
  ],
  applications: [
    {
      _id: '66366fb2df9b1166e5faff64',
      numberOfApplications: '100060',
      name: 'Дмитро',
      tel: '+380504444444',
      comment: '',
      createdAt: '2024-05-04T17:26:10.226+00:00',
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

const handleAllOrderFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.allOrders = action.payload.result;
};

const handlePrins3DFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.prins3D = action.payload.result;
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
      .addCase(getPrins3D.fulfilled, handlePrins3DFulfilled)
      .addCase(getQuickOrders.fulfilled, handleQuickOrdersFulfilled)
      .addCase(getApplications.fulfilled, handleApplicationsFulfilled)
      .addMatcher(
        isAnyOf(
          getAllOrders.pending,
          getPrins3D.pending,
          getQuickOrders.pending,
          getApplications.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getAllOrders.rejected,
          getPrins3D.rejected,
          getQuickOrders.rejected,
          getApplications.rejected
        ),
        handleRejected
      ),
});

export const ordersListReducer = ordersListSlice.reducer;
