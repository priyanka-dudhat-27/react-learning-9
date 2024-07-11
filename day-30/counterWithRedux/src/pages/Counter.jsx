/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../../redux/Action'; // Adjust the import path as needed

const Counter = () => {
  const count = useSelector((store) => store.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter with Redux</h2>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
