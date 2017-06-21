import { request, config } from '../utils'
const { apiBaseURL, api } = config
const { userLogin, userReg, userLogout, userQuery } = api

const KEY_SERVTOKEN = 'webadminserv_token';

export async function login (data) {
  return request({
    url: apiBaseURL + userLogin,
    method: 'get',
    data,
  })
}

export async function reg (data) {
  return request({
    url: apiBaseURL + userReg,
    method: 'get',
    data,
  })
}

export async function logout (data) {
  return request({
    url: apiBaseURL + userLogout,
    method: 'get',
    data,
  })
}

export async function queryWithToken (data) {
  return request({
    url: apiBaseURL + userQuery,
    method: 'get',
    data,
  })
}

export function saveToken (token) {
    localStorage.setItem(KEY_SERVTOKEN, token);
}

export function getToken () {
    return localStorage.getItem(KEY_SERVTOKEN);
}
