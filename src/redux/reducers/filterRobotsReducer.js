import { FILTER_ROBOTS_ONCHANGE } from '../actions/actionTypes';

const initialStateSearch = {
  searchField: '',
};

const filterRobotsReducer = (state = initialStateSearch, actions) => {
  switch (actions.type) {
    case FILTER_ROBOTS_ONCHANGE:
      return { ...state, searchField: actions.payload };
    default:
      return state;
  }
};

export default filterRobotsReducer;
