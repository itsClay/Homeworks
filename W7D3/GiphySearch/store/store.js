import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';

const configureStore = () => {
  const preLoadedState = {};
  // i missed returning this last time (hard bug to catch)
  return createStore(RootReducer, preLoadedState);
};
