import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import { fetchRobots, filterRobots } from '../redux/actions/index';

import './App.css';

const App = (props) => {
  const { robots, isLoading, error, searchField, fetchRobots, filterRobots } =
    props;

  useEffect(() => {
    fetchRobots();
  }, []);

  const onSearchChange = (event) => {
    const {
      target: { value },
    } = event;
    filterRobots(value);
  };

  if (error) {
    throw new Error('Something wrong...');
  }

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="tc">
      <Header />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        )}
      </Scroll>
    </div>
  );
};

// react-redux
const mapStateToProps = (state, ownProps) => {
  // ... computed data from state and optionally ownProps
  return {
    robots: state.fetchRobot.robots,
    isLoading: state.fetchRobot.isLoading,
    error: state.fetchRobot.error,
    searchField: state.filterRobot.searchField,
  };
};
const mapDispatchToProps = (dispatch) => {
  // ... normally is an object full of action creators
  return {
    fetchRobots: () => dispatch(fetchRobots()),
    filterRobots: (value) => dispatch(filterRobots(value)),
  };
};

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// and that function returns the connected, wrapper component:
const ConnectedComponent = connectToStore(App);

export default ConnectedComponent;
