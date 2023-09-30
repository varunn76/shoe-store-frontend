import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";
import wishlistSliceReducer from "./wishlistSlice";

export const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    wishlist: wishlistSliceReducer,
  },
});
