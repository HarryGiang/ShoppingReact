import Axios from 'axios'
import { API } from 'Constants/CommonConstants'

export const postOrder = async (data) => {
  const response = await Axios.post(API.ORDER, data)
  return response
}

export const getOrder = async (page) => {
  const response = await Axios.get(`${API.ORDER}?_page=${page}&_limit=8`)
  return response
}
