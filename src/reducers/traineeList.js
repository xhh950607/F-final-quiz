import { SET_TRAINEE_LIST } from '../actions/traineeList';

const traineeReducer = (state = [], action) => {
  if (action.type === SET_TRAINEE_LIST) {
    return action.payload;
  }
  return state;
};

export default traineeReducer;
