import {
  createStore,
  applyMiddleware,
  DeepPartial,
  StateFromReducersMapObject /** , compose */,
} from 'redux';
import { createLogger } from 'redux-logger';
import ThunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import monitorReducerEnhancer from '../enhancers/monitorReducerEnhancer';
// import loggerMiddleware from '../middleware/logger';
import rootReducer from '../reducers/index';

type preloadedState = StateFromReducersMapObject<typeof rootReducer>;

const logger = createLogger();

export default function configureStore(
  preloadedState?: DeepPartial<preloadedState>
) {
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

export type store = ReturnType<typeof configureStore>;
export type RootState = ReturnType<store['getState']>;
export type AppDispatch = store['dispatch'];
