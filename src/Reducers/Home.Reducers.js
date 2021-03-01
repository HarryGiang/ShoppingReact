import {
  HOME_LIST_FAIL,
  HOME_LIST_REQUEST,
  HOME_LIST_SUCCESS,
} from "Constants/Home.Constants";
function Home(state = { home: [] }, action) {
  switch (action.type) {
    case HOME_LIST_REQUEST:
      return { ...state};
    case HOME_LIST_SUCCESS:
            return { ...state};

    case HOME_LIST_FAIL:
      return { ...state};

    default:
      return state;
  }
}
export { Home };
