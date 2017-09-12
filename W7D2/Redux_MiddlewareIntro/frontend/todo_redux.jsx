import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

const addLoggingToDispatch = store => dispatch => action => {
  console.log('Action receieved: ', action);
  console.log('State pre-dispatch', store.getState());
  const result = dispatch(action); //is next the same as our dispatch function?
  console.log('State post-dispatch', store.getState());

  return result;
};

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);


  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
