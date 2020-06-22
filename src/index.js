import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { employeesReducer } from './reducers/employeeReducer';
import { Provider } from 'react-redux';

const store = createStore(
  employeesReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);