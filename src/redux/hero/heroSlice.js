import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addHero, deleteHero, editHero, getHero } from './heroOperations';

const initialState = {
  items: [
    {
      _id: '',
      image: '',
      text: '',
    },
  ],
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

const handleGetHeroFulfilled = (state, action) => {
  state.items = action.payload;
  state.isLoading = false;
  state.error = null;
};

const handleAddHeroFulfilled = (state, action) => {
  state.items.push(action.payload);
  state.isLoading = false;
  state.error = null;
};

const handleEditHeroFulfilled = (state, action) => {
  state.items = state.items.map(el => {
    if (el._id === action.payload.hero._id) {
      return action.payload.hero;
    }
    return el;
  });
  state.isLoading = false;
  state.error = null;
};

const handleDeleteHeroFulfilled = (state, action) => {
  state.items = state.items.filter(item => item._id !== action.payload.id);
  console.log('id', action.payload.id);
  state.isLoading = false;
  state.error = null;
};

const heroSlice = createSlice({
  name: 'hero',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getHero.fulfilled, handleGetHeroFulfilled)
      .addCase(addHero.fulfilled, handleAddHeroFulfilled)
      .addCase(editHero.fulfilled, handleEditHeroFulfilled)
      .addCase(deleteHero.fulfilled, handleDeleteHeroFulfilled)
      .addMatcher(
        isAnyOf(
          getHero.pending,
          addHero.pending,
          editHero.pending,
          deleteHero.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getHero.rejected,
          addHero.rejected,
          editHero.rejected,
          deleteHero.rejected
        ),
        handleRejected
      ),
});

export const heroReducer = heroSlice.reducer;
