import { ADD_TODO, DELETE_TODO, GET_TODO, UPDATE_TODO } from "./ActionType"

export const AddTodo=(payload)=>{
    return {type:ADD_TODO,payload:payload}
}
export const GetTodo=(payload)=>{
    return {type:GET_TODO,payload:payload}
}
export const DeleteTodo=(payload)=>{
    return {type:DELETE_TODO,payload:payload}
}
export const UpdateTodo=(payload)=>{
    return {type:UPDATE_TODO,payload:payload}
}