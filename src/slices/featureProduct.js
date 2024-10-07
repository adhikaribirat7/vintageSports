import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  produt: [],
  addToCart: [],
  // carts: [],
};

export const productSlice = createSlice({
  name: "featureProduct",
  initialState,
  reducers: {
    fetchProducts: (state, action) => {
      // console.log("called")
      action.payload.forEach((product) => {
        const newProduct = {
          id: nanoid(),
          title: product.title,
        };
        state.products.push(newProduct);
      });
    },
    productsCart: (state, action) => {
      state.produt = action.payload;
    },
    addToCart: (state, action) => {
      // console.log(action.payload);
      state.addToCart.push(action.payload);
  
    },
    removeFromCart: (state, action) => {
      console.log("Removing product from cart:", action.payload)
      state.addToCart = state.addToCart.filter((product) => product !== action.payload);
    },
  },
});

export const { fetchProducts, productsCart, addToCart,removeFromCart } = productSlice.actions;
export default productSlice.reducer;
