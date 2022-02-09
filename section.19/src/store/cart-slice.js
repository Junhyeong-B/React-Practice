import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { title, quantity, total, price } = action.payload;

      state.cartItems.push({ title, quantity, total, price });
    },
    increaseItem(state, action) {
      let index;
      for (let i = 0; i < state.cartItems.length; i++) {
        if (state.cartItems[i].title === action.payload) {
          index = i;
          break;
        }
      }
      const { title, quantity, total, price } = state.cartItems[index];
      state.cartItems[index] = {
        title,
        quantity: quantity + 1,
        total: total + price,
        price,
      };
    },
    decreaseItem(state, action) {
      let index;
      for (let i = 0; i < state.cartItems.length; i++) {
        if (state.cartItems[i].title === action.payload) {
          index = i;
          break;
        }
      }
      const { title, quantity, total, price } = state.cartItems[index];

      if (quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.title !== action.payload
        );
      } else {
        state.cartItems[index] = {
          title,
          quantity: quantity - 1,
          total: total - price,
          price,
        };
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
