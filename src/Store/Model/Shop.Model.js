import { action, thunk } from "easy-peasy";
import { getShop } from "Services/shop";

const shop = {
  productShop: [],
  loading: false,
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
  setProductShop: action((state, payload) => {
    state.productShop = payload;
    state.loading = false;
  }),
  getProductShop: thunk(async (actions) => {
    actions.setLoading(true);
    try {
      const { data } = await getShop();
      actions.setProductShop(data);
    } catch (error) {
      actions.setProductShop([]);
    }
  }),
};
export default shop;
