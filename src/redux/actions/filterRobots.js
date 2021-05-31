import { FILTER_ROBOTS_ONCHANGE } from './actionTypes';

export const filterRobots = (value) => (dispatch) => {
  dispatch({
    type: FILTER_ROBOTS_ONCHANGE,
    payload: value,
  });
};
