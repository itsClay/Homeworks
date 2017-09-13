import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';


const configureStore = (preloadedState = {}) => {
  const store = createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(addLoggingToDispatch) );

  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};

const addLoggingToDispatch = store => next => action => {
  console.log('state pre-action: ', store.getState());
  console.log('action: ', action);
  next(action);
  console.log('state post-action: ', store.getState());
};

// const sillyWare = 

export default configureStore;
