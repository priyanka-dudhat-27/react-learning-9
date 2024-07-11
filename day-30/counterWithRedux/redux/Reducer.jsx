// reducer.jsx

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { INCREMENT, DECREMENT, RESET } from './Action'; // Adjust the import path as needed

const initialState = { count: 0 };

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
};

export default Reducer;
