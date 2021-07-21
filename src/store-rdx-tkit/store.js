import { configureStore,combineReducers } from '@reduxjs/toolkit'
import {mainReducer} from "../store-rdx-tkit/main-reducer";
import toolkitSlice from "../store/toolkitSlice";




export const store = configureStore({
    reducer: {
        main: toolkitSlice
    }
    }
)