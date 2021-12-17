import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItemsToCart: (state, action) => {
      const newItem = action.payload;
      console.log(newItem);
      const updatedItems = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      const amount = Number(newItem.price);
      state.totalAmount += amount;
      console.log(updatedItems);
      if (updatedItems) {
        updatedItems.quantity++;
      } else {
        state.cartItems.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
        });
      }
    },
    removeCartItem: (state, action) => {
      const removableItem = action.payload;
      state.totalQuantity--;
      const price = Number(removableItem.price);
      state.totalAmount -= price;
      const existingItem = state.cartItems.find(
        (item) => item.id === removableItem.id
      );
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== removableItem.id
        );
      } else {
        existingItem.quantity--;
      }
    },
    emptyCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
