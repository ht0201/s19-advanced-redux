import { createSlice } from "@reduxjs/toolkit";

// const initialCartState = [
//   {
//     id: "",
//     title: "",
//     quantity: 0,
//     price: 0,
//     total: 0,
//   },
// ];

const initialCartState = {
  items: [
    {
      id: "1",
      title: "a",
      quantity: 1,
      price: 12,
      totalPrice: 12,
    },
  ],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          title: newItem.title,
          quantity: newItem.quantity,
          price: newItem.price,
          totalPrice: newItem.totalPrice,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
