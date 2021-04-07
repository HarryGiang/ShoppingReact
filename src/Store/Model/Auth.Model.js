import { action, thunk } from 'easy-peasy'
import { getLogin, postRegister } from 'Services/auth'

const auth = {
  loading: false,
  user: {},
  setLoading: action((state, payload) => {
    state.loading = payload
  }),

  setUser: action((state, payload) => {
    state.user = payload
  }),
  saveRegister: thunk(async (actions, { value, fnCallback }) => {
    actions.setLoading(true)
    try {
      await postRegister(value)
      if (fnCallback) {
        fnCallback(true)
        actions.setLoading(false)
      }
    } catch (error) {
      if (fnCallback) {
        fnCallback(false)
      }
    }
  }),
  getLogin: thunk(async (actions, { value, fnCallback }) => {
    try {
      const response = await getLogin(value)
      if (response.data.length) {
        actions.setUser(response.data[0])
        if (fnCallback) {
          fnCallback(true)
        }
      } else {
        fnCallback(false)
      }
      console.log('response :>> ', response)
    } catch (error) {
      if (fnCallback) {
        fnCallback(false)
      }
    }
  }),
}
export default auth
