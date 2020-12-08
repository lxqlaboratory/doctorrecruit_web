import request from '@/utils/request'

export function webLogin(jsonForm) {
  return request({
    url: '/auth/webLogin',
    method: 'POST',
    data: jsonForm
  })
}

export function initMenu(data) {
  return request({
    url: '/auth/getWebMenuList',
    method: 'POST',
    data
  })
}

export function registerNewDoctorInfo(data) {
  return request({
    url: '/web/registerNewDoctorInfo',
    method: 'POST',
    data
  })
}

export function retrievePassword(data) {
  return request({
    url: '/web/retrievePassword',
    method: 'POST',
    data
  })
}
