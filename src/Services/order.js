import Axios from 'axios'
import { API } from 'Constants/CommonContants'

export const postOrder = async (data) => {
  const response = await Axios.post(API.ORDER, data)
  return response
}

export const getOrder = async (data) => {
  const response = await Axios.get(API.ORDER, data)
  return response
}
