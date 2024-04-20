import { apiSlice } from "../../api/apiSlice";

type EmailData = {
  email: string;
}

export const emailApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    subscribe: build.mutation<void, EmailData>({
      query: (data) => ({
        url: '/email/subscribe',
        method: 'POST',
        body: data,
      })
    }),
    unsubscribe: build.mutation<void, EmailData>({
      query: (data) => ({
        url: '/email/unsubscribe',
        method: 'POST',
        body: data,
      })
    }),
  }),
});

export const { useSubscribeMutation, useUnsubscribeMutation } = emailApi;