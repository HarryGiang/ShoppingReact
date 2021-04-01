import { action, thunk } from "easy-peasy";
import { getProductId } from "Services/home";
import { getProductShopId } from "Services/shop";
const products = {
  loading: false,
  productDetail: {},
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
  setProductDetail: action((state, payload) => {
    state.productDetail = payload;
    state.loading = false;
  }),
  getProductId: thunk(async (actions, id) => {
    actions.setLoading(true);
    try {
      const response = await getProductId(id);
      actions.setProductDetail(response.data);
    } catch (error) {
      actions.setProductDetail({})
    }
  }),
  getProductShopId: thunk(async (actions, id) => {
    actions.setLoading(true);
    try {
      const response = await getProductShopId(id);
      actions.setProductDetail(response.data)
    } catch (error) {
      actions.setProductDetail({})
    }
  })
};
export default products;
