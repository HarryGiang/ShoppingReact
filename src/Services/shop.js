import axios from "axios";
import { API } from "Constants/CommonContants";

export const getShop = async () => {
  const response = await axios.get(API.SHOP);
  return response;
};

export const getProductShopId = async (id) => {
  const response = await axios.get(`${API.SHOP}/${id}`);
  return response;
};
