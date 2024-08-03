import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  Order,
  Print3D,
  QuickOrder,
  Aplication,
} from '../../@types/orders.types';
import { baseURL } from 'utils/constants/baseURL';
import toast from 'react-hot-toast';

axios.defaults.baseURL = baseURL;

const handleError = (error: any): string => {
  if (error.response && error.response.data && error.response.data.message) {
    return `Oops! Something was wrong... ${error.response.data.message}`;
  } else {
    return `Oops! Something was wrong... ${error.message}`;
  }
};

export const getAllOrders = createAsyncThunk<
  { result: Order[] },
  undefined,
  { rejectValue: string }
>('orders/getAllOrders', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{ result: Order[] }>('adm/get-orders');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getOneOrder = createAsyncThunk<
  { result: Order },
  { orderId: string },
  { rejectValue: string }
>('orders/getOneOrder', async (orderId, thunkApi) => {
  try {
    const { data } = await axios.get<{ result: Order }>(
      `adm/get-order/${orderId}`
    );

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const updateOneOrder = createAsyncThunk<
  { result: Order },
  { orderId: string; orderData: Order },
  { rejectValue: string }
>('orders/updateOneOrder', async ({ orderId, orderData }, thunkApi) => {
  try {
    const { data } = await axios.put<{ result: Order }>(
      `adm/put-order/${orderId}`,
      {
        ...orderData,
      }
    );
    toast.success('Дані змінено!');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getPrints3D = createAsyncThunk<
  { result: Print3D[] },
  undefined,
  { rejectValue: string }
>('orders/getPrints3D', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{ result: Print3D[] }>(
      'adm/3dprint-orders'
    );

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getQuickOrders = createAsyncThunk<
  { result: QuickOrder[] },
  undefined,
  { rejectValue: string }
>('orders/getQuickOrders', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{ result: QuickOrder[] }>(
      'adm/quick-orders'
    );

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getApplications = createAsyncThunk<
  { result: Aplication[] },
  undefined,
  { rejectValue: string }
>('orders/getApplications', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{ result: Aplication[] }>('adm/feedback');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkApi.rejectWithValue(errorMessage);
  }
});
