import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import Header from '../components/Header';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import { fetchRobots, filterRobots } from '../redux/actions/index';
import { IRobot } from '../redux/reducers/fetchRobotsReducer';
import { RootState } from '../redux/store';

import './App.css';

interface AppProps extends PropsFromRedux {}

const App = (props: AppProps) => {
  const { robots, isLoading, error, searchField, fetchRobots, filterRobots } =
    props;

  useEffect(() => {
    fetchRobots();
  }, [fetchRobots]);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    filterRobots(value);
  };

  if (error) {
    throw new Error('Something wrong...');
  }

  const filteredRobots = robots.filter((robot: IRobot) => {
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
const mapStateToProps = (state: RootState) => {
  return {
    robots: state.fetchRobot.robots,
    isLoading: state.fetchRobot.isLoading,
    error: state.fetchRobot.error,
    searchField: state.filterRobot.searchField,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  // ... normally is an object full of action creators
  return {
    fetchRobots: () => dispatch(fetchRobots()),
    filterRobots: (value: string) => dispatch(filterRobots(value)),
  };
};

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// and that function returns the connected, wrapper component:
const ConnectedComponent = connectToStore(App);

type PropsFromRedux = ConnectedProps<typeof connectToStore>;

export default ConnectedComponent;
