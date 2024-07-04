import React, { useReducer } from 'react'

const Counter = () => {
    const initialState={count:0}

    const reducer=(state,action)=>{
        switch(action){
            case "INCREMENT":
                return {...state,count:state.count+1}
            case "DECREMENT":
                return {...state,count:state.count-1}
            case "RESET":
                return {count:0}
            default:
                return state
        }
    }

    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <h2>Counter {state.count}</h2>
        <button onClick={()=>dispatch("INCREMENT")}>Increment</button>
        <button onClick={()=>dispatch("DECREMENT")}>Decrement</button>
        <button onClick={()=>dispatch("RESET")}>Reset</button>
    </div>
  )
}

export default Counter