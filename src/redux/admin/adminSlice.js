import { createSlice } from '@reduxjs/toolkit';
import { login, logOut, refreshAdmin } from './adminOperations';

const initialState = {
  login: '',
  token: '',
  errorStatus: null,
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
};

const handlePending = (state, { payload }) => {
  state.isLoading = true;
  state.errorStatus = null;
};

const handleRefreshPending = state => {
  state.isRefreshing = true;
  state.errorStatus = null;
};

const handleLogoutPending = state => {
  state.login = '';
  state.token = '';
  state.errorStatus = null;
  state.isLoggedIn = false;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.errorStatus = payload;
};

const handleRefreshRejected = state => {
  state.isRefreshing = false;
  // state.isLoggedIn = false;
};

const handleEntranceFulfilled = (state, { payload }) => {
  state.login = payload.login;
  state.token = payload.token;
  state.errorStatus = null;
  state.isLoading = false;
  state.isLoggedIn = true;
};

const handleRefreshFulfilled = (state, { payload }) => {
  state.login = payload.login;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
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
