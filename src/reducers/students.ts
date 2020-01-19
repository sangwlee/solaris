import { Alert, ActionSheetIOS } from 'react-native'
import { createActions, handleActions } from 'redux-actions'
import { getStudents, getAllStudents } from '../services'

const initState = []

const prefix = 'STUDENTS'
const ADD_STUDENTS = 'ADD_STUDENTS'
const ADD_ALL_STUDENTS = 'ADD_ALL_STUDENTS'

const {
  addStudents,
  addAllStudents,
} = createActions(
  ADD_STUDENTS,
  ADD_ALL_STUDENTS,
  { prefix },
)

export const fetchStudents = dispatch => async (teacherId) => {
  const students = await getStudents(teacherId)
  await dispatch(addStudents(students))
}

export const fetchAllStudents = dispatch => async () => {
  const allStudents = await getAllStudents()
  await dispatch(addAllStudents(allStudents))
}

export const studentsReducer = handleActions(
  {
    ADD_STUDENTS: {
      next: (state, action) => {
        return [ ...action.payload ] 
      },
    },
  },
  initState,
  { prefix },
)

export const allStudentsReducer = handleActions(
  {
    ADD_ALL_STUDENTS: {
      next: (state, action) => {
        return [ ...action.payload ]
      },
    }
  },
  initState,
  { prefix }
)