import { combineReducers } from 'redux';
import fetchRobotsReducer, { IFetchRobotState } from './fetchRobotsReducer';
import filterRobotsReducer, { IFilterRobotState } from './filterRobotsReducer';

const rootReducer = combineReducers({
  fetchRobot: fetchRobotsReducer,
  filterRobot: filterRobotsReducer,
});

export default rootReducer;

export interface IStore {
  fetchRobot: IFetchRobotState;
  filterRobot: IFilterRobotState;
}
