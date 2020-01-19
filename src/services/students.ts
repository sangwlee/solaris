import { request } from '../util'

export const getStudents = (teacherId) => {
  const method = 'GET'
  const url = `/users/${teacherId}/students`
  return request(url, { method })
}