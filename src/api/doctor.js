import request from '@/utils/request'

export function physicalexaminationApplySubmit(data) {
  return request({
    url: '/medicare/physicalexaminationApplySubmit',
    method: 'POST',
    data: data
  })
}
