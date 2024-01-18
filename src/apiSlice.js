import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://hp-api.onrender.com/api/',
    throwOnError: true,
  }),
  endpoints: (builder) => ({
    fetchAllStudents: builder.query({
      query: () => 'characters/students',
    }),
    fetchTeachers: builder.query({
      query: () => 'characters/staff',
    }),
    fetchAllSpells: builder.query({
      query: () => 'spells',
    }),
    fetchStudentById: builder.query({
      query: (id) => `character/${id}`,
    }),
  }),
  reducerPath: 'potterApi',
});

export const {
  useFetchAllStudentsQuery,
  useFetchTeachersQuery,
  useFetchAllSpellsQuery,
  useFetchStudentByIdQuery,
} = api;
