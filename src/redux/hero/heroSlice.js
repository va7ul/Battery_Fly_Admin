import { createSlice } from '@reduxjs/toolkit';
import { addHeroImage, getHeroImages } from './heroOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handleGetImagesFulfilled = (state, action) => {
  state.items = action.payload;
};

const handleAddImageFulfilled = (state, action) => {
  state.items.push(action.payload);
};

const heroSlice = createSlice({
  name: 'hero',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getHeroImages.fulfilled, handleGetImagesFulfilled)
      .addCase(addHeroImage.fulfilled, handleAddImageFulfilled),
});

export const { setMenuOpen, setSubMenuOpen, setThirdMenuOpen, setCartOpen } =
  heroSlice.actions;
export const heroReducer = heroSlice.reducer;
