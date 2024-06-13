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

export const getPromoCodes = createAsyncThunk(
  'promoCodes/getPromoCodes',
  async (_, thunkApi) => {
    const { token } = thunkApi.getState().admin;

    try {
      setAuthHeader(token);
      const { data } = await axios.get('adm/promo-codes');

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      console.error(errorMessage);
      toast.error('Сталася помилка, спробуйте ще раз!');

      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const addPromoCode = createAsyncThunk(
  'promoCodes/addPromoCode',
  async (promoData, thunkApi) => {
    const { token } = thunkApi.getState().admin;

    try {
      setAuthHeader(token);
      const { data } = await axios.post('adm/promo-code', promoData);
      toast.success('Промокод додано!');

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      console.error(errorMessage);
      toast.error('Сталася помилка, спробуйте ще раз!');

      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const updatePromoCode = createAsyncThunk(
  'promoCodes/updatePromoCode',
  async ({ id, promoData }, thunkApi) => {
    const { token } = thunkApi.getState().admin;
    try {
      setAuthHeader(token);
      const { data } = await axios.put(`adm/promo-code/${id}`, {
        ...promoData,
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

export const deletePromoCode = createAsyncThunk(
  'promoCodes/deletePromoCode',
  async (id, thunkApi) => {
    const { token } = thunkApi.getState().admin;

    try {
      setAuthHeader(token);
      const { data } = await axios.delete(`adm/promo-code/${id}`);
      toast.success('Промокод видалено!');

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      console.error(errorMessage);
      toast.error('Сталася помилка, спробуйте ще раз!');

      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);
