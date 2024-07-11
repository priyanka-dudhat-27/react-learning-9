/* eslint-disable no-unused-vars */
import React from 'react'

const Reducer = (state,action) => {
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

export default Reducer