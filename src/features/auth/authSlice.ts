import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface AuthState {
  token: string | null;
  user: {} | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const {user, accessToken} = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    }
  }
})

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectToken = (state: RootState) => state.auth.token;
export const selectUser = (state: RootState) => state.auth.user;