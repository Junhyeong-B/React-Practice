import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, title, price } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (!existingItem) {
        state.cartItems.push({ id, title, quantity: 1, total: price, price });
      } else {
        existingItem.quantity++;
        existingItem.total += existingItem.price;
      }
      state.totalQuantity++;
    },
    decreaseItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
      }
      state.totalQuantity--;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
