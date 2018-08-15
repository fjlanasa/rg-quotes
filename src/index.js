import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./reducers";
import App from './components/App/';
import './styles/index.css';

const store = createStore(rootReducer, window.devToolsExtension ? window.devToolsExtension() : f => f);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
