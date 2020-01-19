import { combineReducers } from 'redux';
import {
  studentsReducer as students
} from '../reducers'

export const rootReducer = combineReducers({
  students
});
