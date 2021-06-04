import { Dispatch } from 'redux';
import { FILTER_ROBOTS_ONCHANGE } from './actionTypes';

export const filterRobots = (value: string) => (dispatch: Dispatch) => {
  dispatch({
    type: FILTER_ROBOTS_ONCHANGE,
    payload: value.trim(),
  });
};
