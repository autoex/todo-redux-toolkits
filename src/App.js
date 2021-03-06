import React, {useState} from 'react';
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import FlipMove from 'react-flip-move';
import {addTodo, minusOne, plusOne, ridTodo} from "./store/toolkitSlice";

const App = () => {
    const [input, setInput] = useState('')
    const counter = useSelector(state => state.main.count);
    const todo = useSelector(state => state.main.todo);
    const dispatch = useDispatch();
    const formSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('');
    };
    const plusOneHandler = () => {

        dispatch(plusOne())
    };

    const minusOneHandler = () => {
        dispatch(minusOne())
    };
    const ridTodoHandler = (payload) => {
        dispatch(ridTodo(payload))
    }
    return (
        <div className='app'>
            <div className='counter'>
                <div> Count: {counter}</div>
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn btn-danger" onClick={minusOneHandler}>-1</button>
                    <button type="button" className="btn btn-success" onClick={plusOneHandler}>+1</button>
                </div>
            </div>
            <div className="mb-3">
                <form action="" onSubmit={formSubmit}><input type="text" className="form-control"
                                                             id="formGroupExampleInput"
                                                             placeholder="Example input placeholder" value={input}
                                                             onChange={e => setInput(e.target.value)}/></form>
            </div>
            {todo.length ?
                <div className='card'>
                    <ul className="list-group list-group-flush">
                        <FlipMove>
                            {todo.map((item, idx) => <li className='list-group-item' key={idx}
                                                         onClick={() => ridTodoHandler(idx)}>{item}</li>)}
                        </FlipMove>
                    </ul>
                </div>
                : 'No ToDO'}

        </div>
    );
};

export default App;