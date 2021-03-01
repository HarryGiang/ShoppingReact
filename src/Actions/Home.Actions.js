import axios from "axios";
import {
  HOME_LIST_FAIL,
  HOME_LIST_REQUEST,
  HOME_LIST_SUCCESS,
} from "Constants/Home.Constants";

const home = () => async (dispatch) => {
  try {
    dispatch({ type: HOME_LIST_REQUEST });
    dispatch({ type: HOME_LIST_SUCCESS });
  } catch (error) {
    dispatch({ type: HOME_LIST_FAIL });
  }
};
export { home,  };
