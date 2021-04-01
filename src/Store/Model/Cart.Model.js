import { action, computed } from 'easy-peasy'
import _get from 'lodash/get'
import _set from 'lodash/set'

const cart = {
  cart: [],
  count: computed((state) => state.cart.length),

  setCart: action((state, payload) => {
    console.log('payload :>> ', payload)
    const data = state.cart
    for (let i = 0; i < state.cart.length; i += 1) {
      if (
        payload.id === state.cart[i].id &&
        payload.color === state.cart[i].color
      ) {
        let count = _get(data, `[${i}].quantity`, 0)
        count += payload.quantity
        const dataAddQuantity = _set(state.cart, `[${i}].quantity`, count)
        state.cart = dataAddQuantity
      }
    }
    state.cart = [...data, payload]
    // state.cart = [...data, payload];
  }),
  setAddQuantity: action((state, payload) => {
    const data = state.cart
    for (let i = 0; i < state.cart.length; i += 1) {
      if (
        payload.id === state.cart[i].id &&
        payload.color === state.cart[i].color
      ) {
        let count = _get(data, `[${i}].quantity`, 0)
        // if (state.cart[i].quantity < payload.quantity) {
        if (payload.quantity > state.cart[i].quantity) {
          const quantity = payload.quantity - state.cart[i].quantity
          count += quantity
        } else {
          const quantity = state.cart[i].quantity - payload.quantity
          console.log('quantity -', quantity)
          count -= quantity
        }
        const dataAddQuantity = _set(state.cart, `[${i}].quantity`, count)
        state.cart = dataAddQuantity
      }
    }
    // state.cart = [...data, payload];
    state.cart = [...data, payload]
  }),
  setRemoveProduct: action((state, payload) => {
    console.log('payload', payload)
    state.cart = state.cart.filter((item) => item.id !== payload.id)
  }),
}

export default cart
