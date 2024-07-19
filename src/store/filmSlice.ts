import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "../app/store.ts";

interface FilmsState {
    movie: string;
    selectedShow: string
}

const initialState: FilmsState = {
    movie: '',
    selectedShow:'',
};

const api = 'http://api.tvmaze.com/search/shows?q=';

export const fetchShowDetails = createAsyncThunk<void, string, {state: RootState}>(
    'films/fetchShowDetails',
    async (show: string) => {
        try {
            const response = await axios.get(`${api}${show}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching show details:", error);
            throw error;
        }
    }
);

const filmSlice = createSlice({
    name: "films",
    initialState,
    reducers: {
        clearSelectedShow: (state) => {
            state.selectedShow = '';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchShowDetails.fulfilled, (state, action) => {
            state.selectedShow = action.payload;
        });
    },
});

export const { clearSelectedShow } = filmSlice.actions;

export const filmReducer = filmSlice.reducer;
