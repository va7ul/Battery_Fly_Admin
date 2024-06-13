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

export const getCustomers = createAsyncThunk(
  'customers/getCustomers',
  async (_, thunkApi) => {
    const { token } = thunkApi.getState().admin;

    try {
      setAuthHeader(token);
      const { data } = await axios.get('adm/users');

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      console.error(errorMessage);
      toast.error('Сталася помилка, спробуйте ще раз!');
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);
