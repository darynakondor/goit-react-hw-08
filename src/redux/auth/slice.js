import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, checkAuth } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(register.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(register.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(login.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(login.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(logout.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(logout.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addMatcher(
        (action) =>
          action.type.endsWith('/fulfilled') ||
          action.type.endsWith('/rejected'),
        (state) => {
          state.isRefreshing = false;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
export default authSlice.reducer;
