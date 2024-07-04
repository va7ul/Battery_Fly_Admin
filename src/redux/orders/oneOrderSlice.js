import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getOneOrder, updateOneOrder } from './ordersOperations';

const initialState = {
  result: {
    _id: '',
    status: '',
    numberOfOrder: '',
    firstName: '',
    lastName: '',
    email: '',
    comment: '',
    tel: '',
    total: null,
    promoCode: '',
    promoCodeDiscount: null,
    discountValue: null,
    together: null,
    cartItems: [],
    deliveryType: '',
    city: '',
    warehouse: '',
    payment: '',
    createdAt: '',
  },

  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.result = action.payload.result;
};

const oneOrderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    increaseQuantity(state, action) {
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
    },

    decreaseQuantity(state, action) {
      const {
        codeOfGood,
        capacityKey,
        selectedSealing,
        selectedHolder,
        price,
      } = action.payload;

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
    },

    deleteItem(state, action) {
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
    },

    changeDiscount(state, { payload }) {
      state.result.discountValue = payload;
    },

    changeTogether(state, { payload }) {
      state.result.together = payload;
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
  changeDiscount,
  changeTogether,
} = oneOrderSlice.actions;
export const oneOrderReducer = oneOrderSlice.reducer;
