import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from 'utils/constants/baseURL';

axios.defaults.baseURL = baseURL;

const handleError = error => {
  if (error.response && error.response.data && error.response.data.message) {
    return `Oops! Something was wrong... ${error.response.data.message}`;
  } else {
    return `Oops! Something was wrong... ${error.message}`;
  }
};

export const getAllOrders = createAsyncThunk(
  'orders/getAllOrders',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('adm/orders');

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const getOneOrder = createAsyncThunk(
  'orders/getOneOrder',
  async (orderId, thunkApi) => {
    try {
      const { data } = await axios.get(`adm/orders/${orderId}`);
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);
