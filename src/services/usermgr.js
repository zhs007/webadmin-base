import { request, config } from '../utils'
const { apiBaseURL, api } = config
const { usermgrGet } = api

export async function getUserList (data) {
  return request({
    url: apiBaseURL + usermgrGet,
    method: 'get',
    data,
  })
}
