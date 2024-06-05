import {legacy_createStore} from 'redux'
import Reducer from './Reducer'

const initialValue={
    count:0
}
export const store = legacy_createStore(Reducer,initialValue)
console.log(store)

