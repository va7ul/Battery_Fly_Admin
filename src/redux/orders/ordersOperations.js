import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from 'utils/constants/baseURL';
import toast from 'react-hot-toast';

axios.defaults.baseURL = baseURL;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

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
    const { token } = thunkApi.getState().admin;

    try {
      setAuthHeader(token);
      const { data } = await axios.get('adm/get-orders');

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      console.error(errorMessage);
      toast.error('Сталася помилка, спробуйте ще раз!');

      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const getOneOrder = createAsyncThunk(
  'orders/getOneOrder',
  async (orderId, thunkApi) => {
    const { token } = thunkApi.getState().admin;

    try {
      setAuthHeader(token);
      const { data } = await axios.get(`adm/get-order/${orderId}`);

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      console.error(errorMessage);
      toast.error('Сталася помилка, спробуйте ще раз!');

      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const updateOneOrder = createAsyncThunk(
  'orders/updateOneOrder',
  async ({ orderId, orderData }, thunkApi) => {
    const { token } = thunkApi.getState().admin;

    try {
      setAuthHeader(token);
      const { data } = await axios.put(`adm/put-order/${orderId}`, {
        ...orderData,
      });
      toast.success('Дані змінено!');

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      console.error(errorMessage);
      toast.error('Сталася помилка, спробуйте ще раз!');

      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const getPrints3D = createAsyncThunk(
  'orders/getPrints3D',
  async (_, thunkApi) => {
    const { token } = thunkApi.getState().admin;

    try {
      setAuthHeader(token);
      const { data } = await axios.get('adm/3dprint-orders');

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      console.error(errorMessage);
      toast.error('Сталася помилка, спробуйте ще раз!');

      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const getQuickOrders = createAsyncThunk(
  'orders/getQuickOrders',
  async (_, thunkApi) => {
    const { token } = thunkApi.getState().admin;

    try {
      setAuthHeader(token);
      const { data } = await axios.get('adm/quick-orders');

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      console.error(errorMessage);
      toast.error('Сталася помилка, спробуйте ще раз!');

      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const getApplications = createAsyncThunk(
  'orders/getApplications',
  async (_, thunkApi) => {
    const { token } = thunkApi.getState().admin;

    try {
      setAuthHeader(token);
      const { data } = await axios.get('adm/feedback');

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      console.error(errorMessage);
      toast.error('Сталася помилка, спробуйте ще раз!');

      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);
