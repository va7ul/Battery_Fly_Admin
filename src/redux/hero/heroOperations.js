import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { baseURL } from '../../utils/constants/baseURL';

axios.defaults.baseURL = baseURL;

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

export const getHeroImages = createAsyncThunk(
  'hero/getHeroImages',
  async (_, thunkAPI) => {
    // const { token } = thunkAPI.getState().user;
    try {
      // setAuthHeader(token);
      const { data } = await axios.get('hero');
      return data.image;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addHeroImage = createAsyncThunk(
  'hero/addHeroImage',
  async (formData, thunkAPI) => {
    // const { token } = thunkAPI.getState().user;
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    try {
      // setAuthHeader(token);
      const { data } = await axios.post('adm/hero', formData, config);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editHeroImage = createAsyncThunk(
  'hero/editHeroImage',
  async ({ id, hero }, thunkAPI) => {
    // const { token } = thunkAPI.getState().user;
    try {
      // setAuthHeader(token);
      const { data } = await axios.put(`adm/hero/${id}`, { ...hero });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteHeroImage = createAsyncThunk(
  'hero/deleteHeroImage',
  async (id, thunkAPI) => {
    // const { token } = thunkAPI.getState().user;
    try {
      // setAuthHeader(token);
      const { data } = await axios.delete(`adm/hero/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
