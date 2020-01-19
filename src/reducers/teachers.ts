import { Alert } from 'react-native'
import { createActions, handleActions } from 'redux-actions'
import { getTeachers } from '../services'

const initState = {
  teachers: [],
}

const prefix = 'TEACHERS'
const ADD_TEACHERS = 'ADD_TEACHERS'

const {
  addTeachers,
} = createActions(
  ADD_TEACHERS,
  { prefix },
)

export const fetchTeachers = dispatch => async (studentId) => {
  const teachers = await getTeachers(studentId)
  await dispatch(addTeachers(teachers))
}

export const teachersReducer = handleActions(
  {
    ADD_TEACHERS: {
      next: (state, action) => {
        return {
          ...state,
          teachers: action.payload,
        }
      },
    },
  },
  initState,
  { prefix },
)