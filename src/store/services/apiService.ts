import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ICatalog } from 'shared/types/ICatalog';

export const Api = createApi({
	reducerPath: 'Api',
	baseQuery: fetchBaseQuery({
		baseUrl: `${import.meta.env.VITE_API_BASE_URL}/api`,
	}),
	endpoints: (build) => ({
		fetchCategories: build.query<ICatalog[], void>({
			query: () => ({
				url: '/catalog',
			}),
		}),
		fetchCategory: build.query({
			query: (id) => ({
				url: `/catalog/${id}`,
			}),
		}),
	}),
});
export const { useFetchCategoriesQuery, useFetchCategoryQuery } = Api;
