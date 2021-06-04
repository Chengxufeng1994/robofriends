import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import 'tachyons';

import App from './containers/App';
import configureStore from './redux/store/index';
import * as serviceWorker from './serviceWorker';

import './index.css';

const store = configureStore();
const rootElement = document.getElementById('root');

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  rootElement as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.register(undefined);
