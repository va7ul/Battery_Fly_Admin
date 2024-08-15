import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { addHero, deleteHero, editHero, getHero } from './heroOperations';
import { HeroData} from '../../@types/hero.types';

type InitialState = {
  items: HeroData[];
  isLoading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  items: [],
  isLoading: false,
  error: null,
}

const handlePending =( state: InitialState) => {
  state.isLoading = true;
};

const handleRejected = (state: InitialState, action: PayloadAction<string | undefined>) => {
  state.isLoading = false;
  state.error = action.payload ?? 'Unknown error';
};

const handleGetHeroFulfilled = (state: InitialState, action: PayloadAction<HeroData[]>) => {
  state.items = action.payload;
  state.isLoading = false;
  state.error = null;
};

const handleAddHeroFulfilled = (state: InitialState, action: PayloadAction<HeroData>) => {
  state.items.push(action.payload);
  state.isLoading = false;
  state.error = null;
};

const handleEditHeroFulfilled = (state: InitialState, action: PayloadAction<{hero: HeroData }>) => {
  state.items = state.items.map(el => {
    if (el._id === action.payload.hero._id) {
      return action.payload.hero;
    }
    return el;
  });
  state.isLoading = false;
  state.error = null;
};

const handleDeleteHeroFulfilled = (state: InitialState, action: PayloadAction<{ id: string }>) => {
  state.items = state.items.filter(item => item._id !== action.payload.id);
  state.isLoading = false;
  state.error = null;
};

const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {},
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
