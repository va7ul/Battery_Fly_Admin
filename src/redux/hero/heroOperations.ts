import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from '../../utils/constants/baseURL';
import toast from 'react-hot-toast';
import { HeroData } from '../../@types/hero.types';
axios.defaults.baseURL = baseURL;

const handleError = (error: any): string => {
  if (error.response && error.response.data && error.response.data.message) {
    return `Oops! Something was wrong... ${error.response.data.message}`;
  } else {
    return `Oops! Something was wrong... ${error.message}`;
  }
};

export const getHero = createAsyncThunk<
  HeroData[],
  undefined,
  { rejectValue: string }
>('hero/getHero', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get<{ image: HeroData[] }>('hero');
    return data.image;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const addHero = createAsyncThunk<
  HeroData,
  FormData,
  { rejectValue: string }
>('hero/addHero', async (formData, thunkAPI) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  try {
    const { data } = await axios.post<{ hero: HeroData }>(
      'adm/hero',
      formData,
      config
    );
    toast.success('Банер додано!');
    return data.hero;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const editHero = createAsyncThunk<
  { hero: HeroData },
  { id: string; formData: FormData },
  { rejectValue: string }
>('hero/editHero', async ({ id, formData }, thunkAPI) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  try {
    const { data } = await axios.put<{ hero: HeroData }>(
      `adm/hero/${id}`,
      formData,
      config
    );
    toast.success('Дані змінено!');
    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const deleteHero = createAsyncThunk<
  { id: string },
  string,
  { rejectValue: string }
>('hero/deleteHero', async (id, thunkAPI) => {
  try {
    const { data } = await axios.delete<{ id: string }>(`adm/hero/${id}`);
    toast.success('Банер видалено!');
    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkAPI.rejectWithValue(errorMessage);
  }
});
