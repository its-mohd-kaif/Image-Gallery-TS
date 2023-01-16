import { configureStore } from "@reduxjs/toolkit";
import reduxSlice from "./reduxSlice";
// Store 
const store = configureStore({
  reducer: {
    image: reduxSlice,
  },
});

export default store;
