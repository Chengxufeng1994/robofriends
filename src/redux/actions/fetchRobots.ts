import { Dispatch } from 'redux';

import {
  FETCH_ROBOTS_START,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILED,
} from './actionTypes';
import { IRobot } from '../reducers/fetchRobotsReducer';
import axios from '../../api/index';

export const fetchRobots = () => (dispatch: Dispatch) => {
  dispatch(fetchRobotStart());
  axios({
    method: 'GET',
    url: '/users',
  })
    .then((response) => {
      const { data } = response;
      dispatch(fetchRobotSuccess(data));
    })
    .catch((error) => {
      dispatch(fetchRobotFailed(error));
    });
};

const fetchRobotStart = () => {
  return {
    type: FETCH_ROBOTS_START,
  };
};

const fetchRobotSuccess = (data: Array<IRobot>) => {
  return {
    type: FETCH_ROBOTS_SUCCESS,
    payload: data,
  };
};

const fetchRobotFailed = (error: Error) => {
  return {
    type: FETCH_ROBOTS_FAILED,
    payload: error,
  };
};
