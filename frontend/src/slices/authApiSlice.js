import { apiSlice } from './apiSlice';

const AUTH_URL = '/api/auth/';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/sing-up`,
        method: 'POST',
        body: data,
      }),
    }),
    singIn: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/sing-in`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useSignUpMutation, useSingInMutation } = authApiSlice;
