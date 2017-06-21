import { request, config } from '../utils'
const { apiBaseURL, apiPrefix, api } = config
const { userLogin } = api

export async function login (data) {
  return request({
    url: apiBaseURL + userLogin,
    method: 'get',
    data,
  })
}
