import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
  isEmpty: true,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.basket.push(action.payload);
      state.isEmpty = false;
    },
    deleteItem(state, action) {
      // payload = itemId
      state.basket = state.basket.filter((item) => item.id !== action.payload);
    },
    clearBasket(state) {
      state.basket = [];
      state.isEmpty = true;
    },
  },
});

export const { addItem, deleteItem, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;
