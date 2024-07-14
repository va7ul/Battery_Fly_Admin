import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login, logOut, refreshAdmin } from './adminOperations';
import { AuthData } from '../../@types/admin.types';

type InitialState = AuthData & {
  errorStatus: string | number | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  isRefreshing: boolean;
};

const initialState: InitialState = {
  login: '',
  token: '',
  errorStatus: null,
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
};

const handlePending = (state: InitialState) => {
  state.isLoading = true;
  state.errorStatus = null;
};

const handleRefreshPending = (state: InitialState) => {
  state.isRefreshing = true;
  state.errorStatus = null;
};

const handleLogoutPending = (state: InitialState) => {
  state.login = '';
  state.token = '';
  state.errorStatus = null;
  state.isLoggedIn = false;
};

const handleRejected = (
  state: InitialState,
  { payload }: PayloadAction<string | number | undefined>
) => {
  state.isLoading = false;
  state.errorStatus = payload ?? 'Unknown error';
};

const handleRefreshRejected = (state: InitialState) => {
  state.isRefreshing = false;
  state.isLoggedIn = false;
};

const handleEntranceFulfilled = (
  state: InitialState,
  { payload }: PayloadAction<AuthData>
) => {
  state.login = payload.login;
  state.token = payload.token;
  state.errorStatus = null;
  state.isLoading = false;
  state.isLoggedIn = true;
};

const handleRefreshFulfilled = (
  state: InitialState,
  { payload }: PayloadAction<AuthData>
) => {
  state.login = payload.login;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.pending, handlePending)
      .addCase(login.rejected, handleRejected)
      .addCase(login.fulfilled, handleEntranceFulfilled)
      .addCase(logOut.pending, handleLogoutPending)
      .addCase(refreshAdmin.pending, handleRefreshPending)
      .addCase(refreshAdmin.fulfilled, handleRefreshFulfilled)
      .addCase(refreshAdmin.rejected, handleRefreshRejected);
  },
});

export const adminReducer = adminSlice.reducer;
