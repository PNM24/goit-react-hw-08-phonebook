import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser, setAuthToken } from '../../api/api';

const initialState = {
  user: null,
  status: 'idle',
  error: null,
};

export const register = createAsyncThunk('auth/register', async ({ email, password }) => {
  const response = await registerUser(email, password);
  setAuthToken(response.token);
  return response.user;
});

export const login = createAsyncThunk('auth/login', async ({ email, password }) => {
  const response = await loginUser(email, password);
  setAuthToken(response.token);
  return response.user;
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await logoutUser();
  setAuthToken(null);
  return null;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.status = 'idle';
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      });
  },
});

export default authSlice.reducer;