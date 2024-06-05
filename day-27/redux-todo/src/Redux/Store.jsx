import {legacy_createStore} from 'redux'
import Reducer from '../../../../day-26/redux-counter/Redux/Reducer'

const initialValue={
    todo:[]
}

export const store=legacy_createStore(Reducer,initialValue)
console.log(store)