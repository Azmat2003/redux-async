import { createSlice, current } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    initial : localStorage.getItem('count-initial') ? Number(localStorage.getItem('count-initial')) : null,
    current : localStorage.getItem('count-current') ? Number(localStorage.getItem('count-current')) : null,
}

const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        set : (state, action)=>{
            state.initial = action.payload;
            state.current = action.payload;
            localStorage.setItem('count-initial', state.initial);
            localStorage.setItem('count-current', state.current);
        },
        increment : (state, action)=>{
            console.log("state", state);
            if(state.initial == null) return;
            state.current++;
            // localStorage.setItem('count-initial', state.initial);
            localStorage.setItem('count-current', state.current);
        },
        decrement : (state, action)=>{
            if(state.initial == null) return;
            state.current--;
            localStorage.setItem('count-current', state.current);
        },
        reset : (state, action)=>{
            if(state.initial == null) return;
            state.current = state.initial;
            localStorage.setItem('count-current', state.current);
        },
    }
})

export const {set, increment, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer;