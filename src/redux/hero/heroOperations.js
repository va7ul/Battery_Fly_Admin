import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { baseURL } from '../../utils/constants/baseURL';

axios.defaults.baseURL = baseURL;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getHero = createAsyncThunk('hero/getHero', async (_, thunkAPI) => {
  // const { token } = thunkAPI.getState().user;
  try {
    // setAuthHeader(token);
    const { data } = await axios.get('hero');
    return data.image;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addHero = createAsyncThunk(
  'hero/addHero',
  async (formData, thunkAPI) => {
    const { token } = thunkAPI.getState().admin;
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    try {
      setAuthHeader(token);
      const { data } = await axios.post('adm/hero', formData, config);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editHero = createAsyncThunk(
  'hero/editHero',
  async ({ id, formData }, thunkAPI) => {
    const { token } = thunkAPI.getState().admin;
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    try {
      setAuthHeader(token);
      const { data } = await axios.put(`adm/hero/${id}`, formData, config);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteHero = createAsyncThunk(
  'hero/deleteHero',
  async (id, thunkAPI) => {
    const { token } = thunkAPI.getState().admin;
    try {
      setAuthHeader(token);
      const { data } = await axios.delete(`adm/hero/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
