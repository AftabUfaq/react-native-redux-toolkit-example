import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import api from '../../api/api';
export const taskApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: api,
  }),
  tagTypes: ['Ports', 'Search', 'Pages', 'Ticket', 'Faq'],
  endpoints: builder => ({
    airports: builder.query({
      query: () => '/airports',
      providesTags: ['Ports'],
    }),
    getAirports: builder.query({
      query: id => ({
        url: `/airports/${id}`,
        method: 'GET',
      }),
    }),    
  }),
});
export const {
  useGetAirportsQuery,
  useAirportsQuery,
} = taskApi;
