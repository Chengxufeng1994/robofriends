import { combineReducers } from 'redux';
import fetchRobotsReducer from './fetchRobotsReducer';
import filterRobotsReducer from './filterRobotsReducer';

const rootReducer = combineReducers({
  fetchRobot: fetchRobotsReducer,
  filterRobot: filterRobotsReducer,
});

export default rootReducer;
