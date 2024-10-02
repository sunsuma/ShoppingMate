// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart")) || [], // Load from local storage on init
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart(state, action) {
      state.cartItems = action.payload;
      localStorage.setItem("cart", JSON.stringify(state.cartItems)); // Persist to local storage
    },
    addToCart(state, action) {
      state.cartItems.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cartItems)); // Persist to local storage
    },
    // removeFromCart(state, action) {
    //   state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    //   localStorage.setItem("cart", JSON.stringify(state.cartItems)); // Persist to local storage
    // },
    removeFromCart: (state, action) => {
      const itemId = action.payload; // Get the item ID from the payload
      state.cartItems = state.cartItems.filter(item => item.id !== itemId); // Remove item from cart
      localStorage.setItem('cart', JSON.stringify(state.cartItems)); // Update localStorage
    },
    resetCart(state) {
      state.cartItems = []; // Reset cart items
      localStorage.removeItem("cart"); // Clear local storage
    },
  },
});

export const { setCart, addToCart, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
