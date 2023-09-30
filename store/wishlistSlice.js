const { createSlice } = require("@reduxjs/toolkit");

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistItems: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
        const item = state.wishlistItems.find((p) => p.id === action.payload.id);
        if (item) {
          item.quantity++;
          item.attributes.price = item.oneQuantityPrice * item.quantity;
        } else {
          state.wishlistItems.push({ ...action.payload, quantity: 1 });
        }
    },
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (p) => p.id !== action.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
