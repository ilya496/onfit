import { apiSlice } from "../../api/apiSlice";
import { Review } from "../../interfaces/Review";
import { providesList } from "../../utils/helpers";

export const reviewsApi = apiSlice.injectEndpoints({
  endpoints: build => ({
    getAllReviews: build.query<Review[], void>({
      query: () => '/reviews',
      providesTags: (result) => providesList(result, 'Review')
    }),
    getReviewById: build.query<Review, number>({
      query: id => `/reviews?id=${id}`,
      providesTags: (result, error, id) => [{ type: 'Review', id }],
    }),
    getReviewByUserId: build.query<Review, number>({
      query: id => `/reviews?userId=${id}`,
      providesTags: (result, error, id) => [{ type: 'Review', id }],
    }),
    addReview: build.mutation<Review, Review>({
      query: review => ({
        url: '/reviews',
        method: 'POST',
        body: review,
      }),
      invalidatesTags: [{ type: 'Review', id: 'LIST' }],
    }),
    updateReview: build.mutation<Review, Review>({
      query: review => ({
        url: `/reviews/${review.id}`,
        method: 'PUT',
        body: review,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Review', id }],
    }),
    deleteReview: build.mutation<void, number>({
      query: id => ({
        url: `/reviews/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Review', id }],
    }),
  })
})