import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import dataSlice from "./dataSlice";
const base = process.env.REACT_PUBLIC_BASE_URL;
console.log(base, "base");
let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInN1YiI6NjYwLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTMzMTAyNDksImV4cCI6MTY5MzMyODI0OX0.-F6od9mqMsR2uvvhwK1bm1mWR55wcoTMZYdtQNHjOyM";
const dataApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.tailwinduikit.com/"
  }),
  tagTypes: ["allEmployees", "conversations", "login"],
  //For get endpoint
  endpoints: (builder) => ({
    getAllEmployees: builder.query({
      query: () => "components/all",
      providesTags: ["allEmployees"]
    }),
    // Create Conversation
    createComponents: builder.mutation({
      query: (payload) => ({
        url: "auth/login",
        method: "POST",
        body: payload
      }),
      invalidatesTags: ["login"]
    })
  })

  // For post endpoint
});
export const { useGetAllEmployeesQuery, useCreateComponentsMutation } =
  dataApiSlice;

export default dataApiSlice;
