import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from 'utils/constants/baseURL';

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
    const { token } = thunkApi.getState().user;

    try {
      setAuthHeader(token);
      const { data } = await axios.get('adm/promoCodes');

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const addPromoCode = createAsyncThunk(
  'promoCodes/addPromoCode',
  async (promoData, thunkApi) => {
    const { token } = thunkApi.getState().user;

    try {
      setAuthHeader(token);
      const { data } = await axios.post('adm/promoCodes', promoData);

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const updatePromoCode = createAsyncThunk(
  'promoCodes/updatePromoCode',
  async ({ id, promoData }, thunkApi) => {
    const { token } = thunkApi.getState().user;

    try {
      setAuthHeader(token);
      const { data } = await axios.put(`adm/promoCodes/${id}`, {
        ...promoData,
      });

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const deletePromoCode = createAsyncThunk(
  'promoCodes/deletePromoCode',
  async (id, thunkApi) => {
    const { token } = thunkApi.getState().user;

    try {
      setAuthHeader(token);
      const { data } = await axios.delete(`adm/promoCodes/${id}`);

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);
