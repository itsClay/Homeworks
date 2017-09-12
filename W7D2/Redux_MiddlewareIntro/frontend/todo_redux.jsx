import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
    const store = configureStore(preloadedState);

  // phase 1: pre redux / antipattern
  // store.dispatch = addLoggingToDispatch(store);

  // phase 2
  // store = applyMiddlewares(store, [addLoggingToDispatch]);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});

// phase 1: pre redux
// const addLoggingToDispatch = (store) => {
//   const originDispatch = store.dispatch;
//   return (action) => {
//     console.log('state pre-action: ', store.getState());
//     console.log('action: ', action);
//     store.dispatch(action);
//     console.log('state post-action: ', store.getState());
//   };
// };

// const addLoggingToDispatch = store => next => action => {
//   console.log('state pre-action: ', store.getState());
//   console.log('action: ', action);
//   next(action);
//   console.log('state post-action: ', store.getState());
// };

// phase 2 - generate a higher level function to apply our middleware
// const applyMiddlewares = (store, middlewares) =>  {
//   let dispatch = store.dispatch;
//   middlewares.forEach( (ware) => {
//     dispatch = ware(store)(dispatch);
//   });
//   return Object.assign({}, store, { dispatch });
// };
