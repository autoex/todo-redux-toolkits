const PLUS_ONE = 'PLUS_ONE';
const MINUS_ONE = 'MINUS_ONE';
const ADD_TODO ='ADD_TODO';


const initState = {
    count: 11,
    todo: ['first', 'nike']
};

export const mainReducer = (state = initState, action) => {
    switch (action.type) {
        case PLUS_ONE:
            return {...state, count: state.count + 1}
        case MINUS_ONE:
            return {...state, count: state.count - 1}
        case ADD_TODO:
            return {...state, todo: [...state.todo, action.payload]}
        default:
            return state

    }
};


export const plusOne = () => ({
    type: PLUS_ONE
});

export const minusOne = () => ({
    type: MINUS_ONE
});

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
});