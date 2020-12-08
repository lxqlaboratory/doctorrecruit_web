import request from '@/utils/request'

export function changePassword(data) {
  return request({
    url: '/web/changePassword',
    method: 'POST',
    data: data
  })
}
export function initPay() {
  return request({
    url: '/pay/initPay',
    method: 'POST',
    data: {}
  })
}
export function getSex() {
  return request({
    url: '/web/getSex',
    method: 'POST',
    data: {}
  })
}
export function getBasePeopleCode() {
  return request({
    url: '/web/getBasePeopleCode',
    method: 'POST',
    data: {}
  })
}
export function getBaseProTown() {
  return request({
    url: '/web/getBaseProTown',
    method: 'POST',
    data: {}
  })
}
export function getLastExperienceList() {
  return request({
    url: '/web/getLastExperienceList',
    method: 'POST',
    data: {}
  })
}
export function getDegreeList() {
  return request({
    url: '/web/getDegreeList',
    method: 'POST',
    data: {}
  })
}
export function getGradMajor() {
  return request({
    url: '/web/getGradMajor',
    method: 'POST',
    data: {}
  })
}
export function getPoliticalStatus() {
  return request({
    url: '/web/getPoliticalStatus',
    method: 'POST',
    data: {}
  })
}
export function getGrade() {
  return request({
    url: '/web/getGrade',
    method: 'POST',
    data: {}
  })
}
export function getMasterDegree() {
  return request({
    url: '/web/getMasterDegree',
    method: 'POST',
    data: {}
  })
}
export function getApplyMajor() {
  return request({
    url: '/web/getApplyMajor',
    method: 'POST',
    data: {}
  })
}
export function getBachelorStudy() {
  return request({
    url: '/web/getBachelorStudy',
    method: 'POST',
    data: {}
  })
}
export function getInitInfo() {
  return request({
    url: '/web/getInitInfo',
    method: 'POST',
    data: {}
  })
}
export function getInitResume() {
  return request({
    url: '/web/getInitResume',
    method: 'POST',
    data: {}
  })
}
export function isCheck() {
  return request({
    url: '/web/isCheck',
    method: 'POST',
    data: {}
  })
}
export function getBachelorDegree() {
  return request({
    url: '/web/getBachelorDegree',
    method: 'POST',
    data: {}
  })
}
export function getGradSchool() {
  return request({
    url: '/web/getGradSchool',
    method: 'POST',
    data: {}
  })
}
export function getApplyTutor(data) {
  return request({
    url: '/web/getApplyTutor',
    method: 'POST',
    data: data
  })
}
export function getResearchDirection(data) {
  return request({
    url: '/web/getResearchDirection',
    method: 'POST',
    data: data
  })
}
export function getCityByProvince(data) {
  return request({
    url: '/web/getCityByProvince',
    method: 'POST',
    data: data
  })
}
export function doctorRecruitSubmit(data) {
  return request({
    url: '/web/doctorRecruitSubmit',
    method: 'POST',
    data: data
  })
}
export function getScores() {
  return request({
    url: '/web/getScores',
    method: 'POST',
    data: {}
  })
}
