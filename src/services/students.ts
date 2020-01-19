import { Alert } from 'react-native'
import { request } from '../util'

export const getStudents = (teacherId) => {
  const method = 'GET'
  const url = `/users/${teacherId}/students`
  return request(url, { method })
}

export const getAllStudents = () => {
  const method = 'GET'
  const url = `/students`
  return request(url, { method })
}