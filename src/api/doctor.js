import request from '@/utils/request'

export function changePassword(data) {
  return request({
    url: '/web/changePassword',
    method: 'POST',
    data: data
  })
}
