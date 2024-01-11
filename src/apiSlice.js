import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://hp-api.onrender.com/api/' }),
  endpoints: (builder) => ({
    fetchAllStudents: builder.query({
      query: () => 'characters/students', // Provide a function that returns the API endpoint
    }),
    fetchTeachers: builder.query({
      query: () => 'characters/staff', // Provide a function that returns the API endpoint
    }),
    fetchAllSpells: builder.query({
      query: () => 'spells',
    }),
  }),
  reducerPath: 'potterApi',
});

export const {
  useFetchAllStudentsQuery,
  useFetchTeachersQuery,
  useFetchAllSpellsQuery,
} = api;
