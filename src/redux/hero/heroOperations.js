import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getHeroImages = createAsyncThunk(
  'hero/getGeroImages',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/hero');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addHeroImage = createAsyncThunk(
  'hero/addHeroImage',
  async (image, thunkAPI) => {
    try {
      const res = await axios.post('/hero', image);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editHeroImage = createAsyncThunk(
  'hero/editHeroImage',
  async ({ id, image }, thunkAPI) => {
    try {
      const res = await axios.put(`/hero/${id}`, { ...image });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteHeroImage = createAsyncThunk(
  'hero/deleteHeroImage',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/hero/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
