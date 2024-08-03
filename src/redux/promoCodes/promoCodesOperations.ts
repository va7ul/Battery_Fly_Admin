import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from 'utils/constants/baseURL';
import toast from 'react-hot-toast';
import { PromoCode, PromoData } from '../../@types/promoCodes.types';

axios.defaults.baseURL = baseURL;

const handleError = (error: any): string => {
  if (error.response && error.response.data && error.response.data.message) {
    return `Oops! Something was wrong... ${error.response.data.message}`;
  } else {
    return `Oops! Something was wrong... ${error.message}`;
  }
};

export const getPromoCodes = createAsyncThunk<
  { promo: PromoCode[] },
  undefined,
  { rejectValue: string }
>('promoCodes/getPromoCodes', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{ promo: PromoCode[] }>('adm/promo-codes');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const addPromoCode = createAsyncThunk<
  { promo: PromoCode },
  PromoData,
  { rejectValue: string }
>('promoCodes/addPromoCode', async (promoData, thunkApi) => {
  try {
    const { data } = await axios.post<{ promo: PromoCode }>(
      'adm/promo-code',
      promoData
    );
    toast.success('Промокод додано!');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const updatePromoCode = createAsyncThunk<
  { promo: PromoCode },
  { id: string; promoData: PromoData },
  { rejectValue: string }
>('promoCodes/updatePromoCode', async ({ id, promoData }, thunkApi) => {
  try {
    const { data } = await axios.put<{ promo: PromoCode }>(
      `adm/promo-code/${id}`,
      {
        ...promoData,
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

export const deletePromoCode = createAsyncThunk<
  { id: string },
  string,
  { rejectValue: string }
>('promoCodes/deletePromoCode', async (id, thunkApi) => {
  try {
    const { data } = await axios.delete<{ id: string }>(`adm/promo-code/${id}`);
    toast.success('Промокод видалено!');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkApi.rejectWithValue(errorMessage);
  }
});
