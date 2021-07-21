import {combineReducers, createStore} from "redux";
import {mainReducer} from "./main-reducer";

const reducers = combineReducers({
    main: mainReducer
});

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;