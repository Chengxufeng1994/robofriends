import { createStore, applyMiddleware /** compose */ } from 'redux';
import { createLogger } from 'redux-logger';
import ThunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import monitorReducerEnhancer from '../enhancers/monitorReducerEnhancer';
// import loggerMiddleware from '../middleware/logger';
import rootReducer from '../reducers/index';

const logger = createLogger();

export default function configureStore(preloadedState) {
  const middlewares = [logger, ThunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}
