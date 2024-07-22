import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { baseURL } from 'utils/constants/baseURL';
import toast from 'react-hot-toast';
import { Product, ProductZbirky } from '../../@types/products.types';

axios.defaults.baseURL = baseURL;

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const handleError = (error: any): string => {
  if (error.response && error.response.data && error.response.data.message) {
    return `Oops! Something was wrong... ${error.response.data.message}`;
  } else {
    return `Oops! Something was wrong... ${error.message}`;
  }
};

export const getAssortment = createAsyncThunk<
  {
    result: (Product | ProductZbirky)[];
  },
  undefined,
  { rejectValue: string }
>('products/getAssortment', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{
      result: (Product | ProductZbirky)[];
    }>('products');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getProducts = createAsyncThunk<
  {
    result: (Product | ProductZbirky)[];
  },
  string[],
  { rejectValue: string }
>('products/getProducts', async (products, thunkApi) => {
  try {
    const { data } = await axios.post<{
      result: (Product | ProductZbirky)[];
    }>('products', { products });

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getBatteries18650 = createAsyncThunk<
  {
    result: (Product | ProductZbirky)[];
  },
  undefined,
  { rejectValue: string }
>('products/getBatteries18650', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{
      result: (Product | ProductZbirky)[];
    }>('products/batteries/18650');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getBatteries21700 = createAsyncThunk<
  {
    result: (Product | ProductZbirky)[];
  },
  undefined,
  { rejectValue: string }
>('products/getBatteries21700', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{
      result: (Product | ProductZbirky)[];
    }>('products/batteries/21700');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getBatteries32650 = createAsyncThunk<
  {
    result: (Product | ProductZbirky)[];
  },
  undefined,
  { rejectValue: string }
>('products/getBatteries32650', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{
      result: (Product | ProductZbirky)[];
    }>('products/batteries/32650');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getBatterieslipo = createAsyncThunk<
  {
    result: (Product | ProductZbirky)[];
  },
  undefined,
  { rejectValue: string }
>('products/getBatterieslipo', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{
      result: (Product | ProductZbirky)[];
    }>('products/batteries/lipo');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getBatterieslifepo4 = createAsyncThunk<
  {
    result: (Product | ProductZbirky)[];
  },
  undefined,
  { rejectValue: string }
>('products/getBatterieslifepo4', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{
      result: (Product | ProductZbirky)[];
    }>('products/batteries/lifepo4');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getAssemblies = createAsyncThunk<
  {
    result: (Product | ProductZbirky)[];
  },
  undefined,
  { rejectValue: string }
>('products/getAssemblies', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{
      result: (Product | ProductZbirky)[];
    }>('products/assemblies');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getBatteriesForFPV = createAsyncThunk<
  {
    result: (Product | ProductZbirky)[];
  },
  undefined,
  { rejectValue: string }
>('products/getBatteriesForFPV', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{
      result: (Product | ProductZbirky)[];
    }>('products/batteries-for-fpv');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getBatteriesForTransport = createAsyncThunk<
  {
    result: (Product | ProductZbirky)[];
  },
  undefined,
  { rejectValue: string }
>('products/getBatteriesForTransport', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{
      result: (Product | ProductZbirky)[];
    }>('products/batteries-for-transport');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getBatteriesForToys = createAsyncThunk<
  {
    result: (Product | ProductZbirky)[];
  },
  undefined,
  { rejectValue: string }
>('products/getBatteriesForToys', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{
      result: (Product | ProductZbirky)[];
    }>('products/batteries-for-toys');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getDevices = createAsyncThunk<
  {
    result: (Product | ProductZbirky)[];
  },
  undefined,
  { rejectValue: string }
>('products/getDevices', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{
      result: (Product | ProductZbirky)[];
    }>('products/devices');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getMaterials = createAsyncThunk<
  {
    result: (Product | ProductZbirky)[];
  },
  undefined,
  { rejectValue: string }
>('products/getMaterials', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{
      result: (Product | ProductZbirky)[];
    }>('products/materials');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getOneProduct = createAsyncThunk(
  'products/getOneProduct',
  async (productId, thunkApi) => {
    try {
      const { data } = await axios.get(`products/${productId}`);
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      console.error(errorMessage);
      toast.error('Сталася помилка, спробуйте ще раз!');

      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/product-add',
  async (formData, thunkApi) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    try {
      const { data } = await axios.post(`adm/product-add`, formData, config);
      toast.success('Товар додано!');

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      console.error(errorMessage);
      toast.error('Сталася помилка, спробуйте ще раз!');

      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const editProduct = createAsyncThunk(
  'products/product-edit',
  async ({ formData, codeOfGood }, thunkApi) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    try {
      const { data } = await axios.put(
        `adm/product-edit/${codeOfGood}`,
        formData,
        config
      );
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

export const addProductZbirky = createAsyncThunk(
  'products/productZbirky-add',
  async (formData, thunkApi) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    try {
      const { data } = await axios.post(`adm/assemblies-add`, formData, config);
      toast.success('Товар додано!');

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      console.error(errorMessage);
      toast.error('Сталася помилка, спробуйте ще раз!');

      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const editProductZbirky = createAsyncThunk(
  'products/productZbirky-edit',
  async ({ formData, codeOfGood }, thunkApi) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    try {
      const { data } = await axios.put(
        `adm/assemblies-edit/${codeOfGood}`,
        formData,
        config
      );
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

export const deleteProduct = createAsyncThunk<
  {
    id: string;
  },
  string,
  { rejectValue: string }
>('products/product-delete', async (codeOfGood, thunkApi) => {
  const { token } = (thunkApi.getState() as RootState).admin;

  try {
    setAuthHeader(token);
    const { data } = await axios.delete<{ id: string }>(
      `adm/product/${codeOfGood}`
    );
    toast.success('Товар видалено!');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const deleteProductZbirky = createAsyncThunk<
  {
    id: string;
  },
  string,
  { rejectValue: string }
>('products/product-delete', async (codeOfGood, thunkApi) => {
  const { token } = (thunkApi.getState() as RootState).admin;

  try {
    setAuthHeader(token);
    const { data } = await axios.delete<{ id: string }>(
      `adm/assemblies/${codeOfGood}`
    );
    toast.success('Товар видалено!');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkApi.rejectWithValue(errorMessage);
  }
});
