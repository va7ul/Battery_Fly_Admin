import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from '../../utils/constants/baseURL';
import toast from 'react-hot-toast';

axios.defaults.baseURL = baseURL;

export const getHero = createAsyncThunk('hero/getHero', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('hero');
    return data.image;
  } catch (error) {
    toast.error('Сталася помилка, спробуйте ще раз!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addHero = createAsyncThunk(
  'hero/addHero',
  async (formData, thunkAPI) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    try {
      const { data } = await axios.post('adm/hero', formData, config);
      toast.success('Банер додано!');
      return data.hero;
    } catch (error) {
      toast.error('Сталася помилка, спробуйте ще раз!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editHero = createAsyncThunk(
  'hero/editHero',
  async ({ id, formData }, thunkAPI) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    try {
      const { data } = await axios.put(`adm/hero/${id}`, formData, config);
      toast.success('Дані змінено!');
      return data;
    } catch (error) {
      toast.error('Сталася помилка, спробуйте ще раз!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteHero = createAsyncThunk(
  'hero/deleteHero',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`adm/hero/${id}`);
      toast.success('Банер видалено!');
      return data;
    } catch (error) {
      toast.error('Сталася помилка, спробуйте ще раз!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
