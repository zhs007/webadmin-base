import { request, config } from '../utils'
const { apiBaseURL, api } = config
const { mailGet } = api

export async function query (params) {
  return request({
    url: apiBaseURL + mailGet,
    method: 'get',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: users,
    method: 'delete',
    data: params,
  })
}
