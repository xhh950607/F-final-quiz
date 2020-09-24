import { SET_TRAINER_LIST } from '../actions/trainerList';

const trainerReducer = (state = [], action) => {
  if (action.type === SET_TRAINER_LIST) {
    return action.payload;
  }
  return state;
};

export default trainerReducer;