import { action, computed, thunk } from "easy-peasy";

const cart = {
  cart: [],
  visible: false,
  count: computed(state => state.cart.length),

  setCart: action((state, payload) => {
    const data = state.cart;
    state.cart = [...data, payload];
  }),
  setVisible: action((state) =>{
    state.visible = true;
  }),
  setOnClose: action((state) =>{
    state.visible = false;
  })
};

export default cart;
