import { combineReducers } from 'redux';
import {
  studentsReducer as students,
  teachersReducer as teachers,
} from '../reducers'

export const rootReducer = combineReducers({
  students,
  teachers,
});
