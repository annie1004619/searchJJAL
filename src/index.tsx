import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';
import ScrollButton from './components/atoms/ScrollButton';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(Thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
