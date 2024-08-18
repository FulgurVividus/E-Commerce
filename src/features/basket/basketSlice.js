import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.basket.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = itemId
      state.basket = state.basket.filter((item) => item.id !== action.payload);
    },
    clearBasket(state) {
      state.basket = [];
    },
  },
});

export const { addItem, deleteItem, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;
