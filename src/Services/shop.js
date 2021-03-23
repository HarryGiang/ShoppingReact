import axios from "axios";
import { API } from "Constants/CommonContants";

export const getShop = async (param) => {
  const response = await axios.get(API.SHOP);
  return response;
};
