import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@/app/Redux/api/apiSlice";
import booksApi from "../features/books/books";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [booksApi.reducerPath]: booksApi.reducer,
    },
});

export default store;
