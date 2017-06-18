import { request, config } from '../utils'
const { baseURL, apiPrefix, api } = config
const { userLogin } = api

export async function login (data) {
  return request({
    url: baseURL + apiPrefix + userLogin,
    method: 'get',
    data,
  })
}
