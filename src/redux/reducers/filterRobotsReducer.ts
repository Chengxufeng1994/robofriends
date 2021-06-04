import { FILTER_ROBOTS_ONCHANGE } from '../actions/actionTypes';

declare interface IAction {
  type: string;
  payload: any;
}

export interface IFilterRobotState {
  searchField: string;
}

const initialStateSearch: IFilterRobotState = {
  searchField: '',
};

const filterRobotsReducer = (
  state: IFilterRobotState = initialStateSearch,
  action: IAction
) => {
  switch (action.type) {
    case FILTER_ROBOTS_ONCHANGE:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export default filterRobotsReducer;
