import { RootState } from 'redux/store';

export const selectHero = (state: RootState) => state.hero.items;
export const selectLoading = (state: RootState) => state.hero.isLoading;
export const selectError = (state: RootState) => state.hero.error;