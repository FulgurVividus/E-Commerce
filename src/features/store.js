import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket/basketSlice";
import productsReducer from "./products/productsSlice";

const store = configureStore({
  reducer: {
    basket: basketReducer,
    products: productsReducer,
  },
});

export default store;
