import { apiSlice } from "../../api/apiSlice";
import { Credentials } from "../../interfaces/Credentials";
import { User } from "../../interfaces/User";


export const authApi = apiSlice.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<User, Credentials>({
      query: credentials => ({
        url: '/auth/signin',
        method: 'POST',
        body: credentials
      })
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST'
      }), 
    })
  })
})

export const { useLoginMutation } = authApi;