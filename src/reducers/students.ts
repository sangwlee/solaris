const ADD_STUDENTS = 'ADD_STUDENTS'

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_STUDENTS:
      return action.payload;
    default:
      return state;
  }
}