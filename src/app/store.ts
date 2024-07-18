import {configureStore, Store} from "@reduxjs/toolkit";
import {filmReducer} from "../store/filmSlice.ts";

export const store:Store = configureStore({
    reducer: {
        films: filmReducer,
    }
});

export type RootState = ReturnType<typeof store.dispatch>;
export type AppDispatch = typeof store.dispatch;