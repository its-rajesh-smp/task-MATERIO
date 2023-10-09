// Imports
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../reducers/authSlice";

// Redux-Store
const store = configureStore({
  reducer: {
    authSlice: authSlice.reducer,
  },
});

export default store;
