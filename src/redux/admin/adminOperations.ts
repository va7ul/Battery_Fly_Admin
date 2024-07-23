import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { AuthData, DataUser } from '../../@types/admin.types';
import { baseURL } from 'utils/constants/baseURL';
import toast from 'react-hot-toast';

axios.defaults.baseURL = baseURL;

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const handleError = (error: any): string => {
  if (error.response && error.response.data && error.response.data.message) {
    return `Oops! Something was wrong... ${error.response.data.message}`;
  } else {
    return `Oops! Something was wrong... ${error.message}`;
  }
};

export const login = createAsyncThunk<
  AuthData,
  DataUser,
  { rejectValue: string | number }
>('admin/signin', async (dataUser, thunkApi) => {
  try {
    const { data } = await axios.post<AuthData>('adm/signin', dataUser);
    setAuthHeader(data.token);

    return data;
  } catch (err) {
    const error = err as AxiosError;
    const errorMessage = handleError(error);
    console.error(errorMessage);

    if (error.response?.status === 401) {
      return thunkApi.rejectWithValue(error.response.status);
    }

    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const logOut = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: string }
>('adm/signout', async (_, thunkAPI) => {
  try {
    await axios.post('auth/signout');
    clearAuthHeader();
  } catch (error) {
    const errorMessage = handleError(error);

    return thunkAPI.rejectWithValue(errorMessage);
  } finally {
    toast.success('Вихід з профілю виконано успішно!', {
      duration: 3000,
    });
  }
});

export const refreshAdmin = createAsyncThunk<
  AuthData,
  undefined,
  { rejectValue: string }
>('admin/refresh', async (_, thunkAPI) => {
  const { token } = (thunkAPI.getState() as RootState).admin;

  if (token === '') {
    return thunkAPI.rejectWithValue('Unable to fetch admin');
  }

  try {
    setAuthHeader(token);
    const { data } = await axios.get<AuthData>('adm/current');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkAPI.rejectWithValue(errorMessage);
  }
});
