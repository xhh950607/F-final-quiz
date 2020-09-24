import { combineReducers } from 'redux';
import traineeList from './traineeList';
import trainerList from './trainerList';

const reducers = combineReducers({
  traineeList,
  trainerList
});

export default reducers;