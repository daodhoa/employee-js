import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { employeesReducer } from './reducers/employeeReducer';
import { employeeDetailReducer } from './reducers/employeeDetailReducer';
import { Provider } from 'react-redux';

const reducers = combineReducers({
  employeesReducer,
  employeeDetailReducer
})

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);