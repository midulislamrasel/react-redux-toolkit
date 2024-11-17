// src/app/features/books/books.js
import { api } from "@/app/Redux/api/apiSlice";

const booksApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        //======Create Books========
        createBook: builder.mutation({
            query: (bookData) => ({
                url: "/books",
                method: "POST",
                body: bookData,
            }),
            invalidatesTags: ["books"],
        }),

        //======GetBooks========
        getBooks: builder.query({
            query: () => ({
                url: "/books",
                method: "GET",
            }),
            providesTags: ["books"],
        }),

        //======GetBooks ID========
        getBookById: builder.query({
            query: (id) => `/books/${id}`,
            providesTags: ["books"],
        }),

        //======Update Books========
        updateBookById: builder.mutation({
            query: ({ id, bookData }) => ({
                url: `/books/${id}`,
                method: "PATCH",
                body: bookData,
            }),
            invalidatesTags: ["books"],
        }),

        //======Delete Books========
        deleteBookById: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["books"],
        }),
    }),
});

export const {
    useCreateBookMutation,
    useGetBooksQuery,
    useGetBookByIdQuery,
    useUpdateBookByIdMutation,
    useDeleteBookByIdMutation,
} = booksApi;

export default booksApi;
