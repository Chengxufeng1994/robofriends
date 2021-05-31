import {
  FETCH_ROBOTS_START,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILED,
} from '../actions/actionTypes';

const initialStateRobots = {
  robots: [],
  isLoading: true,
  error: null,
};

const fetchRobotsReducer = (state = initialStateRobots, action) => {
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
