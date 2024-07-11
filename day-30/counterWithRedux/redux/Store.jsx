// store.jsx

import { legacy_createStore } from 'redux';
import Reducer from './Reducer'; // Adjust the import path as needed

const initialValue = {
  count: 0,
};

export const store = legacy_createStore(Reducer, initialValue);
console.log(store);
