import { action } from "easy-peasy";

const products = {
  productDetail: {},
  setProductDetail: action((state, payload) => {
    state.productDetail = payload;
  }),
};
export default products;
