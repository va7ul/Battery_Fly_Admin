import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from 'utils/constants/baseURL';

axios.defaults.baseURL = baseURL;

const handleError = error => {
  if (error.response && error.response.data && error.response.data.message) {
    return `Oops! Something was wrong... ${error.response.data.message}`;
  } else {
    return `Oops! Something was wrong... ${error.message}`;
  }
};

export const getBatteries18650 = createAsyncThunk(
  'products/getBatteries18650',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('products/batteries/18650');

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const getBatteries21700 = createAsyncThunk(
  'products/getBatteries21700',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('products/batteries/21700');

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const getBatteries32650 = createAsyncThunk(
  'products/getBatteries32650',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('products/batteries/32650');

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const getBatterieslipo = createAsyncThunk(
  'products/getBatterieslipo',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('products/batteries/lipo');

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const getBatterieslifepo4 = createAsyncThunk(
  'products/getBatterieslifepo4',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('products/batteries/lifepo4');

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const getAssemblies = createAsyncThunk(
  'products/getAssemblies',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('products/assemblies');

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const getBatteriesForFPV = createAsyncThunk(
  'products/getBatteriesForFPV',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('products/batteries-for-fpv');

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const getBatteriesForTransport = createAsyncThunk(
  'products/getBatteriesForTransport',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('products/batteries-for-transport');

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const getBatteriesForToys = createAsyncThunk(
  'products/getBatteriesForToys',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('products/batteries-for-toys');

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const getDevices = createAsyncThunk(
  'products/getDevices',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('products/devices');

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const getMaterials = createAsyncThunk(
  'products/getMaterials',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('products/materials');

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const getOneProduct = createAsyncThunk(
  'products/getOneProduct',
  async (productId, thunkApi) => {
    try {
      const { data } = await axios.get(`products/${productId}`);
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
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
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
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
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
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
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
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
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);
