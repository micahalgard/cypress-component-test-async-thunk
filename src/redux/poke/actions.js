import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleThunkRequest } from '../requests';
import Constants from './constants';

export const requestFetchPoke = createAsyncThunk(
    Constants.FETCH_POKE,
    (_, { rejectWithValue}) => {
        const request = {
            endpoint: "pokemon?limit=10",
            method: "GET",
        }
        return handleThunkRequest(request, rejectWithValue);
    }
)