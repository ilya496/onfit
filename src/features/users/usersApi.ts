import { apiSlice } from "../../api/apiSlice";
import { User } from "../../interfaces/User";
import { providesList } from "../../utils/helpers";

export const usersApi = apiSlice.injectEndpoints({
  endpoints: build => ({
    getAllUsers: build.query<User[], void>({
      query: () => '/users',
      providesTags: result => providesList(result, 'User')
    }),
    getUserById: build.query<User, number>({
      query: id => `/users?id=${id}`,
      providesTags: (result, error, id) => [{ type: 'User', id }],
    }),
    updateUser: build.mutation<User, User>({
      query: user => ({
        url: `/users/${user.id}`,
        method: 'PUT',
        body: user,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'User', id }],
    }),
    deleteUser: build.mutation<void, number>({
      query: id => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'User', id }],
    }),
  })
})