import { Alert } from 'react-native'
import { createActions, handleActions } from 'redux-actions'
import { getTeachers, getAllTeachers } from '../services'

const initState = []

const prefix = 'TEACHERS'
const ADD_TEACHERS = 'ADD_TEACHERS'
const ADD_ALL_TEACHERS = 'ADD_ALL_TEACHERS'

const {
  addTeachers,
  addAllTeachers,
} = createActions(
  ADD_TEACHERS,
  ADD_ALL_TEACHERS,
  { prefix },
)

export const fetchTeachers = dispatch => async (studentId) => {
  const teachers = await getTeachers(studentId)
  await dispatch(addTeachers(teachers))
}

export const fetchAllTeachers = dispatch => async () => {
  const allTeachers = await getAllTeachers()
  await dispatch(addAllTeachers(allTeachers))
}

export const teachersReducer = handleActions(
  {
    ADD_TEACHERS: {
      next: (state, action) => {
        return [ ...action.payload ]
      },
    },
  },
  initState,
  { prefix },
)

export const allTeachersReducer = handleActions(
  {
    ADD_ALL_TEACHERS: {
      next: (state, action) => {
        return [ ...action.payload ]
      }
    }
  },
  initState,
  { prefix }
)