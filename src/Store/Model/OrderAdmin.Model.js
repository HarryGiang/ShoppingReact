import { action, computed, thunk } from 'easy-peasy'
import { getOrder } from 'Services/order'

const orderAdmin = {
  orders: [],
  page: 1,
  count: computed((state) => state.orders.length),
  loading: false,

  setLoading: action((state, payload) => {
    state.loading = payload
  }),
  setOrder: action((state, payload) => {
    state.orders = payload
  }),
  setPage: action((state, payload) => {
    state.page = payload
  }),
  getAllOrders: thunk(async (actions, payload, { getState }) => {
    actions.setLoading(true)
    const page = getState().page
    try {
      const { data } = await getOrder(page)
      actions.setOrder(data)
      actions.setLoading(false)
    } catch (error) {
      actions.setLoading(false)
    }
  }),
}
export default orderAdmin
