import { applyMiddleware, combineReducers, compose, createStore }
 from "redux";
import thunk from "redux-thunk";
import  {Home}  from "Reducers/Home.Reducers";
const initialState = {};
const reducer = combineReducers({
  home: Home,
 
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
