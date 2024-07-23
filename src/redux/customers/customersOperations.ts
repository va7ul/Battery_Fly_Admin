import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { baseURL } from 'utils/constants/baseURL';
import toast from 'react-hot-toast';
import { Customer } from '../../@types/customers.types';

axios.defaults.baseURL = baseURL;

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const handleError = (error: any): string => {
  if (error.response && error.response.data && error.response.data.message) {
    return `Oops! Something was wrong... ${error.response.data.message}`;
  } else {
    return `Oops! Something was wrong... ${error.message}`;
  }
};

export const getCustomers = createAsyncThunk<
  { users: Customer[] },
  undefined,
  { rejectValue: string }
>('customers/getCustomers', async (_, thunkApi) => {
  const { token } = (thunkApi.getState() as RootState).admin;

  try {
    setAuthHeader(token);
    const { data } = await axios.get<{ users: Customer[] }>('adm/users');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');
    return thunkApi.rejectWithValue(errorMessage);
  }
});
