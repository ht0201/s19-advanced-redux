import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../store/reducers/ui-slice";
import cartReducer from "../store/reducers/cart-slice";

const store = configureStore({
  reducer: { ui: uiReducer, cart: cartReducer },
});

export default store;
