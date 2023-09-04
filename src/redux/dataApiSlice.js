import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import dataSlice from "./dataSlice";

const base = process.env.REACT_PUBLIC_BASE_URL;
console.log(base, "sss");

// Create an instance of axios
const token = localStorage.getItem("Auth");
console.log(token, "sssssssssssssss");
const dataApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.tailwinduikit.com/",
    prepareHeaders: (headers) => {
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  // baseQuery: fetchBaseQuery({ baseUrl: "https://api.tailwinduikit.com/" }),
  // prepareHeaders: (headers) => {

  //
  //   if (token) {
  //     headers.set('authorization', `Bearer ${token}`)
  //   }
  //   return headers
  // },
  tagTypes: ["allEmployees", "conversations", "login"],
  // For get endpoint
  endpoints: (builder) => ({
    getAllEmployees: builder.query({
      query: () => "components/all",
      providesTags: ["allEmployees"],
    }),
    // Create Conversation
    createComponents: builder.mutation({
      query: (payload) => ({
        url: "auth/login",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["login"],
    }),
    CreatUser: builder.mutation({
      query: (payload) => ({
        url: "/ui-kits",
        method: "POST",
        body: payload,
      }),
    }),
    getUiKits: builder.query({
      query: () => `/ui-kits/all`,
    }),
    updateUiKits: builder.mutation({
      query: ({ id, payload }) => ({
        url: `ui-kits/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["UiKits"],
    }),
    DeleteUiKits: builder.mutation({
      query: ({ id, payload }) => ({
        url: `ui-kits/${id}`,
        method: "Delete",
        body: payload,
      }),
      invalidatesTags: ["UiKits"],
    }),
  }),
});

export const {
  useGetAllEmployeesQuery,
  useCreateComponentsMutation,
  useCreatUserMutation,
  useGetUiKitsQuery,
  useUpdateUiKitsMutation,
  useDeleteUiKitsMutation,
} = dataApiSlice;

export default dataApiSlice;
