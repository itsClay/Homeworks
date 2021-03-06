import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import { fetchSearchGiphys } from './util/api_util';
import { receiveSearchGiphys, fetchSearchGiphys} from './actions/giphy_actions';

document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('root');
  const store = configureStore();

  // remove when done testing store
  window.store = store;
  window.fetchSearchGiphys = fetchSearchGiphys;
  window.receiveSearchGiphys = receiveSearchGiphys;
  window.fetchSearchGiphys = fetchSearchGiphys;
});
