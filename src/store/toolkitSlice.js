import {createSlice} from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        count: 111,
        todo: ['sb', 'nike']
    },
    reducers: {
        plusOne(state) {state.count = state.count +1},
        minusOne(state) {state.count = state.count -1},
        addTodo(state, action) { state.todo.push(action.payload)},
        ridTodo(state, action) { state.todo = state.todo.filter((itm, idx)=>idx !== action.payload)},
    }

})


export default toolkitSlice.reducer;
export const {plusOne, minusOne, addTodo, ridTodo} = toolkitSlice.actions