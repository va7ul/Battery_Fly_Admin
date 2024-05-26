import { createSlice } from '@reduxjs/toolkit';
import {
  addHeroImage,
  deleteHeroImage,
  editHeroImage,
  getHeroImages,
} from './heroOperations';

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

const handeEditHeroFulfilled = (state, action) => {
  state.items = action.payload;
  state.isLoading = false;
  state.error = null;
};

const handleDeleteHeroFulfilled = (state, action) => {
  state.items.splice(action.payload, 1);
  state.isLoading = false;
  state.error = null;
};

const heroSlice = createSlice({
  name: 'hero',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getHeroImages.fulfilled, handleGetHeroFulfilled)
      .addCase(addHeroImage.fulfilled, handleAddHeroFulfilled)
      .addCase(editHeroImage.fulfilled, handeEditHeroFulfilled)
      .addCase(deleteHeroImage.fulfilled, handleDeleteHeroFulfilled),
});

export const { setMenuOpen, setSubMenuOpen, setThirdMenuOpen, setCartOpen } =
  heroSlice.actions;
export const heroReducer = heroSlice.reducer;
