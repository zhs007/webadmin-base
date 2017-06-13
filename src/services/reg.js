import { request, config } from '../utils'
const { api } = config
const { userReg } = api

export async function reg (data) {
  return request({
    url: userReg,
    method: 'post',
    data,
  })
}
