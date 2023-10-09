// Imports
import { createSlice } from "@reduxjs/toolkit";

// Reducer Slice
const authSlice = createSlice({
  name: "user --auth",
  initialState: {
    isLoggedIn: false,
    userRole: null,
  },
  reducers: {
    authUser: (state, action) => {
      state.isLoggedIn = true;
      state.userRole = action.payload.userRole;
    },
    logOutUser: (state, action) => {
      state.isLoggedIn = false;
      state.userRole = null;
    },
  },
});

export default authSlice;
export const { authUser, logOutUser } = authSlice.actions;
