import React, { useReducer } from 'react';

const UseReducer = () => {
    const initialState = { count: 0 };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return { ...state, count: state.count + 1 };
            case 'DECREMENT':
                return { ...state, count: state.count - 1 };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Counter</h2>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <h3>{state.count}</h3>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
    );
};

export default UseReducer;
