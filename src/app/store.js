import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../features/counterSlice.js'
import githubSlice from '../features/githubSlice.js'

export const store = configureStore({
    reducer : {
        counter : counterSlice,
        github : githubSlice,
    }
})