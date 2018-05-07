import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Game from './containers/Game';
import reducer from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={ store }>
    <Game />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
