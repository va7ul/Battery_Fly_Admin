import { createSlice } from '@reduxjs/toolkit';
import { getCustomers } from '../customers/customersOperations';

const initialState = {
  customers: [
    {
      _id: '660c0fe817a24c70c02f36a3',
      firstName: 'Vasyl',
      lastName: 'Podvirnyi',
      patronymic: '',
      tel: '+380962985515',
      email: 'test@gmail.com',
      verifiedEmail: false,
      promoCodes: ['HelloWorld', 'HelloWorld2'],
      delivery: {
        city: 'Ворзель',
        warehouse: 'Відділення №2 (до 10 кг): вул. Курортна, 23а',
      },
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
  state.customers = action.payload.result;
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
