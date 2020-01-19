import { request } from '../util'

export const getTeachers = (studentId) => {
  const method = 'GET'
  const url = `/users/${studentId}/teachers`
  return request(url, { method })
}