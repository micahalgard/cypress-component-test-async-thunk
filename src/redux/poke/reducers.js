import { createSlice } from "@reduxjs/toolkit";
import { requestFetchPoke } from "./actions";

const pokeSlice = createSlice({
    name: "poke",
    initialState: { data: [], error: null },
    reducers: {},
    extraReducers: {
        [requestFetchPoke.fulfilled]: (state, action) => {
            // unit tests are moving action to a fulfilled state
            // this is unexpected and results in unexpected data being stored in state
            console.log(action)
            if(action.payload.results){
                state.data = action.payload.results;
            }
        },
        [requestFetchPoke.rejected]: (state, action) => {
            state.error = action.payload;
        }
    }
});

export default pokeSlice.reducer;