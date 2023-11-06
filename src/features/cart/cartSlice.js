import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      //can mutate payload = new Item
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload ID
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      console.log(item);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;

      item.totalPrice -= item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  updateName,
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, cur) => sum + cur.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, cur) => sum + cur.unitPrice * cur.quantity, 0);
export const getCart = (state) => state.cart.cart;
export const getCurrQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
