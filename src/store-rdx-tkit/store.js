import { configureStore,combineReducers } from '@reduxjs/toolkit'
import {mainReducer} from "../store-rdx-tkit/main-reducer";
import toolkitSlice from "../store/toolkitSlice";

const rootReducer = combineReducers({
    main: toolkitSlice
});


export const store = configureStore({
    reducer:rootReducer
    }
)