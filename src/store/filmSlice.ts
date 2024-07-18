import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "../app/store.ts";
import {Film} from "../type.ts";

interface FilmsState {
    movie: string;
}

const initialState: FilmsState = {
    movie: '',
};

const api = 'http://api.tvmaze.com/search/shows?q=';

export const fetchMoviesSlice= createAsyncThunk<void, Film, {state: RootState}>('film/fetch',
    async (movieValue) => {
    const response = await axios.get(`${api}${movieValue.name}`);
    console.log(response.data);
    return response.data;
});


const filmSlice = createSlice({
    name: "films",
    initialState,
    reducers: {

    },
});

export const filmReducer = filmSlice.reducer;
