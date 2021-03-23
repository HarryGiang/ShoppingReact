import { API } from "Constants/CommonContants";
import axios from "axios";

export const getProducts = async (param) => {
  const response = await axios.get(API.PRODUCT);
  return response;
};
