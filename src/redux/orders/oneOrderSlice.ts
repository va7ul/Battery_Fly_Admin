import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { getOneOrder, updateOneOrder } from './ordersOperations';
import { CartItem, Order, DeleteItemData } from '../../@types/orders.types';

type InitialState = {
  result: Order;
  isLoading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  result: {
    _id: '',
    status: '',
    numberOfOrder: '',
    firstName: '',
    lastName: '',
    email: '',
    comment: '',
    tel: '',
    total: 0,
    promoCode: '',
    promoCodeDiscount: 0,
    discountValue: 0,
    together: 0,
    cartItems: [],
    deliveryType: '',
    city: '',
    warehouse: '',
    payment: '',
    createdAt: '',
    personalDiscountRate: '',
    personalDiscountValue: '',
  },
  isLoading: false,
  error: null,
};

const handlePending = (state: InitialState) => {
  state.isLoading = true;
};

const handleRejected = (
  state: InitialState,
  { payload }: PayloadAction<string | undefined>
) => {
  state.isLoading = false;
  state.error = payload ?? 'Unknown error';
};

const handleFulfilled = (
  state: InitialState,
  { payload }: PayloadAction<{ result: Order }>
) => {
  state.isLoading = false;
  state.error = null;
  state.result = payload.result;
};

const handleIncreaseQuantity = (
  state: InitialState,
  action: PayloadAction<CartItem>
) => {
  const {
    codeOfGood,
    capacityKey,
    selectedSealing,
    selectedHolder,
    price,
    quantity,
  } = action.payload;

  const findingIndex = state.result.cartItems.findIndex(
    item =>
      item.codeOfGood === codeOfGood &&
      item.capacityKey === capacityKey &&
      item.selectedSealing === selectedSealing &&
      item.selectedHolder === selectedHolder
  );

  if (state.result.cartItems[findingIndex].quantityOrdered < quantity) {
    state.result.cartItems[findingIndex].quantityOrdered += 1;
    state.result.cartItems[findingIndex].totalPrice += price;
    state.result.total += price;

    if (!state.result.cartItems[findingIndex].sale) {
      state.result.discountValue += price;
    }
  }
};

const handleDecreaseQuantity = (
  state: InitialState,
  action: PayloadAction<CartItem>
) => {
  const { codeOfGood, capacityKey, selectedSealing, selectedHolder, price } =
    action.payload;

  const findingIndex = state.result.cartItems.findIndex(
    item =>
      item.codeOfGood === codeOfGood &&
      item.capacityKey === capacityKey &&
      item.selectedSealing === selectedSealing &&
      item.selectedHolder === selectedHolder
  );

  if (state.result.cartItems[findingIndex].quantityOrdered > 1) {
    state.result.cartItems[findingIndex].quantityOrdered -= 1;
    state.result.cartItems[findingIndex].totalPrice -= price;
    state.result.total -= price;
  }
};

const handleDeleteItem = (
  state: InitialState,
  action: PayloadAction<DeleteItemData>
) => {
  const {
    totalPrice,
    codeOfGood,
    capacityKey,
    selectedSealing,
    selectedHolder,
  } = action.payload;

  const findingIndex = state.result.cartItems.findIndex(
    item =>
      item.codeOfGood === codeOfGood &&
      item.capacityKey === capacityKey &&
      item.selectedSealing === selectedSealing &&
      item.selectedHolder === selectedHolder
  );

  if (state.result.cartItems.length === 1) {
    return;
  } else {
    state.result.total -= totalPrice;
    state.result.cartItems.splice(findingIndex, 1);
  }
};

const oneOrderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    increaseQuantity: handleIncreaseQuantity,
    decreaseQuantity: handleDecreaseQuantity,
    deleteItem: handleDeleteItem,
    changeDiscountValue(
      state: InitialState,
      { payload }: PayloadAction<number>
    ) {
      state.result.discountValue = payload;
    },
    changeTogether(state: InitialState, { payload }: PayloadAction<number>) {
      state.result.together = payload;
    },
    changePersonalDiscountRate(
      state: InitialState,
      { payload }: PayloadAction<number | string>
    ) {
      state.result.personalDiscountRate = payload;
    },
    changePersonalDiscountValue(
      state: InitialState,
      { payload }: PayloadAction<number | string>
    ) {
      state.result.personalDiscountValue = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addMatcher(
        isAnyOf(getOneOrder.pending, updateOneOrder.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(getOneOrder.rejected, updateOneOrder.rejected),
        handleRejected
      )
      .addMatcher(
        isAnyOf(getOneOrder.fulfilled, updateOneOrder.fulfilled),
        handleFulfilled
      ),
});

export const {
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  changeDiscountValue,
  changeTogether,
  changePersonalDiscountRate,
  changePersonalDiscountValue,
} = oneOrderSlice.actions;
export const oneOrderReducer = oneOrderSlice.reducer;
