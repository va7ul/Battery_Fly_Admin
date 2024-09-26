import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from 'utils/constants/baseURL';
import toast from 'react-hot-toast';
import { Product, Result, AddProduct } from '../../@types/products.types';

axios.defaults.baseURL = baseURL;

const handleError = (error: any): string => {
  if (error.response && error.response.data && error.response.data.message) {
    return `Oops! Something was wrong... ${error.response.data.message}`;
  } else {
    return `Oops! Something was wrong... ${error.message}`;
  }
};

export const getAssortment = createAsyncThunk<
  {
    result: Product[];
  },
  undefined,
  { rejectValue: string }
>('products/getAssortment', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{
      result: Product[];
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
    result: Product[];
  },
  string[],
  { rejectValue: string }
>('products/getProducts', async (products, thunkApi) => {
  try {
    const { data } = await axios.post<{
      result: Product[];
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
    result: Product[];
  },
  undefined,
  { rejectValue: string }
>('products/getBatteries18650', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{
      result: Product[];
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
    result: Product[];
  },
  undefined,
  { rejectValue: string }
>('products/getBatteries21700', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{
      result: Product[];
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
    result: Product[];
  },
  undefined,
  { rejectValue: string }
>('products/getBatteries32650', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{
      result: Product[];
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
    result: Product[];
  },
  undefined,
  { rejectValue: string }
>('products/getBatterieslipo', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{
      result: Product[];
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
    result: Product[];
  },
  undefined,
  { rejectValue: string }
>('products/getBatterieslifepo4', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{
      result: Product[];
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
    result: Product[];
  },
  undefined,
  { rejectValue: string }
>('products/getAssemblies', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{
      result: Product[];
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
    result: Product[];
  },
  undefined,
  { rejectValue: string }
>('products/getBatteriesForFPV', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{
      result: Product[];
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
    result: Product[];
  },
  undefined,
  { rejectValue: string }
>('products/getBatteriesForTransport', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{
      result: Product[];
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
    result: Product[];
  },
  undefined,
  { rejectValue: string }
>('products/getBatteriesForToys', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{
      result: Product[];
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
    result: Product[];
  },
  undefined,
  { rejectValue: string }
>('products/getDevices', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{
      result: Product[];
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
    result: Product[];
  },
  undefined,
  { rejectValue: string }
>('products/getMaterials', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{
      result: Product[];
    }>('products/materials');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);
    toast.error('Сталася помилка, спробуйте ще раз!');

    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getOneProduct = createAsyncThunk<
  {
    result: Result;
  },
  string,
  { rejectValue: string }
  >(
  'products/getOneProduct',
  async (productId, thunkApi) => {
    try {
      const { data } = await axios.get<{
        result: Result
      }>(`products/${productId}`);
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      console.error(errorMessage);
      toast.error('Сталася помилка, спробуйте ще раз!');

      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const addProduct = createAsyncThunk<
  {
    addResult: AddProduct
  },
  FormData,
  { rejectValue: string }
  >(
  'products/product-add',
  async (formData, thunkApi) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    try {
      const { data } = await axios.post<{
    addResult: AddProduct
  }>(`adm/product-add`, formData, config);
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

export const editProduct = createAsyncThunk<
  {
    editResult: Product
  },
  { formData: FormData, codeOfGood: string },
  { rejectValue: string }
  >(
  'products/product-edit',
  async ({ formData, codeOfGood }, thunkApi) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    try {
      const { data } = await axios.put<{ editResult: Product }>(
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

export const addProductZbirky = createAsyncThunk<
  {
    addResult: AddProduct
  },
  FormData,
  { rejectValue: string }
  >(
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

export const editProductZbirky = createAsyncThunk<
  {
    editResult: Product
  },
  { formData: FormData, codeOfGood: string },
  { rejectValue: string }
  >(
  'products/productZbirky-edit',
  async ({ formData, codeOfGood }, thunkApi) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    try {
      const { data } = await axios.put<{ editResult: Product }>(
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
  try {
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
  try {
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
