import { configureStore,combineReducers } from '@reduxjs/toolkit'
import {mainReducer} from "../store-rdx-tkit/main-reducer";

const rootReducer = combineReducers({
    main: mainReducer
});


export const store = configureStore({
    reducer:rootReducer,

})