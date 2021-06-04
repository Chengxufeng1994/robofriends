import {
  FETCH_ROBOTS_START,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILED,
} from '../actions/actionTypes';

declare interface IAction {
  type: string;
  payload: any;
}

// Declaring type of props - see "Typing Component Props" for more examples
export interface IRobot {
  name: string;
  id: number;
  email: string;
}

export interface IFetchRobotState {
  robots: Array<IRobot>;
  isLoading: boolean;
  error: null | Error;
}

const initialStateRobots: IFetchRobotState = {
  robots: [],
  isLoading: true,
  error: null,
};

const fetchRobotsReducer = (
  state:IFetchRobotState = initialStateRobots,
  action: IAction
): IFetchRobotState => {
  switch (action.type) {
    case FETCH_ROBOTS_START:
      return { ...state, isLoading: true };
    case FETCH_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isLoading: false };
    case FETCH_ROBOTS_FAILED:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default fetchRobotsReducer;
