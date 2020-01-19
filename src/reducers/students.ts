import { Alert } from 'react-native'
import { createActions, handleActions } from 'redux-actions'
import { getStudents } from '../services'

const initState = {
  students: [],
}

const prefix = 'STUDENTS'
const ADD_STUDENTS = 'ADD_STUDENTS'

const {
  addStudents,
} = createActions(
  ADD_STUDENTS,
  { prefix },
)

export const fetchStudents = dispatch => async (teacherId) => {
  const students = await getStudents(teacherId)
  await dispatch(addStudents(students))
}

export const studentsReducer = handleActions(
  {
    ADD_STUDENTS: {
      next: (state, action) => {
        return {
          ...state,
          students: action.payload,
        }
      },
    },
  },
  initState,
  { prefix },
)