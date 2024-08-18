import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsPaginated: [],
};

const productsSlice = createSlice({
  name: "productsPaginated",
  initialState,
  reducers: {
    addProductsPaginated(state, action) {
      state.productsPaginated = action.payload;
    },
  },
});

export const { addProductsPaginated } = productsSlice.actions;

export default productsSlice.reducer;
