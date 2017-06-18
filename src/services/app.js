import { request, config } from '../utils'
const { baseURL, apiPrefix, api } = config
const { userLogout, userLogin } = api

export async function login (params) {
  return request({
    url: userLogin,
    method: 'post',
    data: params,
  })
}

export async function logout (params) {
  return request({
    url: userLogout,
    method: 'get',
    data: params,
  })
}

export async function queryWithToken (params) {
  return request({
    url: baseURL + apiPrefix + api.queryWithToken,
    method: 'get',
    data: params,
  })
}
