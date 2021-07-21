import {createAction, createReducer} from "@reduxjs/toolkit";



const initState = {
    count: 111,
    todo: ['sb', 'nike']
};
const plusOne = createAction('PLUS_ONE');
const minusOne = createAction('MINUS_ONE');



export const mainReducer = createReducer(initState, {
[plusOne]: (state)=> {state.count = state.count +1},
[minusOne]: (state)=> {state.count = state.count -1},
})