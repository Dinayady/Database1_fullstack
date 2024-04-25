import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8000/api',
  // prepareHeaders: (headers, { getState }) => {
  //   const token =
  //   (getState() as RootState).auth.
  // },
});

const BaseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: BaseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
