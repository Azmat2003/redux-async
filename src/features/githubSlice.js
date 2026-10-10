import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const fetchData = createAsyncThunk('githubSlice/fetchData', async (username)=>{
    const api = `https://api.github.com/users/${username}`
    const res = await fetch(api);
    const data = await res.json();

    return data;
});

const fetchFollowers = createAsyncThunk('githubSlice/fetchData', async (username)=>{
    const api = `https://api.github.com/users/${username}`
    const res = await fetch(api);
    const data = await res.json();

    return data;
});

const initialState = {
    user : null,
    loading : false,
    error : "",
}

const githubSlice = createSlice({
    name : 'github',
    initialState,
    reducers : {

    },
    extraReducers : (builder)=>{
        builder
        .addCase(fetchData.pending, (state, action)=>{
            // do 
            state.loading = true;
        })
        .addCase(fetchData.fulfilled, (state, action)=>{
            state.user = action.payload;
            state.loading = false;

            localStorage.setItem('username', state.user.login);
        })
        .addCase(fetchData.rejected, (state, action)=>{
            state.error = action.payload;
            state.loading = false;
        })
    }

})

export {fetchData, fetchFollowers};
export default githubSlice.reducer;