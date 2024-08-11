import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getOneProduct } from './productsOperations';
import { addProduct, addProductZbirky } from './productsOperations';
import { Result } from '../../@types/products.types';

type Initial = {
  result: Result;
  selectedHolder: boolean;
  selectedSealing: boolean;
  holderPrice: number;
  sealingPrice: number;
  quantityOrders: number;
  priceWithSale: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: Initial = {
  result: {
    description: '',
    capacity: {},
    capacityKey: '',
    information: '',
    price: '',
    priceOneProduct: '',
    image: [],
  },
  selectedHolder: false,
  selectedSealing: false,
  holderPrice: 0,
  sealingPrice: 0,
  quantityOrders: 1,
  priceWithSale: 0,
  isLoading: false,
  error: null,
};

const oneProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setPrice(state, action: PayloadAction<number>) {
      state.result.price = action.payload;
    },
    setCapacityKey(state, action: PayloadAction<string>) {
      state.result.capacityKey = action.payload;
    },
    setPriceOneProduct(state, action: PayloadAction<number>) {
      state.result.priceOneProduct = action.payload;
    },
    setSelectedHolder(state, action: PayloadAction<boolean>) {
      state.selectedHolder = action.payload;
    },
    setSelectedSealing(state, action: PayloadAction<boolean>) {
      state.selectedSealing = action.payload;
    },
    setQuantityOrders(state, action: PayloadAction<number>) {
      state.quantityOrders = action.payload;
    },
    setSealingPrice(state, action: PayloadAction<number>) {
      state.sealingPrice = action.payload;
    },
    setHolderPrice(state, action: PayloadAction<number>) {
      state.holderPrice = action.payload;
    },
    setPriceWithSale(state, action: PayloadAction<number>) {
      state.priceWithSale = Math.round(action.payload);
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getOneProduct.pending, state => {
        state.isLoading = true;
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.result = action.payload.result;
        state.result.priceOneProduct = action.payload.result.price;
      })
      .addCase(getOneProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? 'Unknown error';
      })
      .addCase(addProduct.pending, state => {
        state.isLoading = true;
      })
      .addCase(addProduct.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? 'Unknown error';
      })
      .addCase(addProductZbirky.pending, state => {
        state.isLoading = true;
      })
      .addCase(addProductZbirky.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addProductZbirky.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? 'Unknown error';
      }),
});

export const {
  setPrice,
  setCapacityKey,
  setPriceOneProduct,
  setSelectedHolder,
  setSelectedSealing,
  setQuantityOrders,
  setSealingPrice,
  setHolderPrice,
  setPriceWithSale,
} = oneProductSlice.actions;
export const oneProductReducer = oneProductSlice.reducer;
