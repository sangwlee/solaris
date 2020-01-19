import { combineReducers } from 'redux';
import {
  studentsReducer as students,
  teachersReducer as teachers,
  allTeachersReducer as allTeachers,
  allStudentsReducer as allStudents,
} from '../reducers'

export const rootReducer = combineReducers({
  students,
  teachers,
  allTeachers,
  allStudents,
});
