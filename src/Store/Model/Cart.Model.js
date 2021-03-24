import { action, computed } from "easy-peasy";

const cart = {
  cart: [],
  count: computed((state) => state.cart.length),

  setCart: action((state, payload) => {
    const data = state.cart;
    state.cart = [...data, payload];
  }),
  setRemoveProduct: action((state, payload) => {
    console.log("payload", payload);
    state.cart = state.cart.filter((item) => item.id !== payload.id);
  }),
};

export default cart;
