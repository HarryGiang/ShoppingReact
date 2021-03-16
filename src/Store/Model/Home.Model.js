import { action, thunk } from 'easy-peasy';
import axios from 'axios'

const home = {
  productList: [],
  todos:"",
  setTodo: action((state, payload) => {
    state.todos =payload ;
  }),
  setProductList: action((state, payload) => {
    state.productList =payload ;
  }),
  saveTodo: thunk(async (actions, payload) => {
    const { data } = await axios.post('/todos', payload);
    actions.setTodo(data);
  }),
};

export default home;
