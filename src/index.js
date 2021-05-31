import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import 'tachyons';

import App from './containers/App';
import configureStore from './redux/store/index';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const store = configureStore();
const rootElement = document.getElementById('root');

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  rootElement
);
registerServiceWorker();
