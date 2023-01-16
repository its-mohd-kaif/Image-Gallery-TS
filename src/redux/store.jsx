import { configureStore } from "@reduxjs/toolkit";
import reduxSlice from "./reduxSlice";

const store = configureStore({
  reducer: {
    image: reduxSlice,
  },
});

export default store;
