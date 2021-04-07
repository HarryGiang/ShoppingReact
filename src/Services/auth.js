import Axios from 'axios'
import { API } from 'Constants/CommonContants'

export const postRegister = async (data) => {
  const response = await Axios.post(API.USER, data)
  return response
}

export const getLogin = async (data) => {
  const response = await Axios.get(API.USER, {
    params: data,
  })
  return response
}
