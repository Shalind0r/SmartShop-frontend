import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ICatalog } from 'shared/types/ICatalog';
import { IProductsList } from 'shared/types/IProducts';
import { IFilters } from 'shared/types/IFilters';
import { objToUrl } from 'store/helpers/objToUrl';

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
		fetchCategory: build.query<ICatalog[], string>({
			query: (id) => ({
				url: `/catalog/${id}`,
			}),
		}),
		fetchProducts: build.query<
			IProductsList[],
			{
				filter: { [key: string]: string[] };
				subCategoryId: string;
				minPrice: string;
				maxPrice: string;
			}
		>({
			query: ({ filter, minPrice, maxPrice, subCategoryId }) => {
				const baseUrl = `/product/?subCategoryId=${subCategoryId}`;
				const filterUrl = objToUrl(filter);

				return {
					url: baseUrl + filterUrl + minPrice + maxPrice,
				};
			},
		}),

		fetchFilters: build.query<IFilters, string>({
			query: (subCategoryId) => ({
				url: `/filters/?subCategoryId=${subCategoryId}`,
			}),
		}),
	}),
});
export const {
	useFetchCategoriesQuery,
	useFetchCategoryQuery,
	useFetchProductsQuery,
	useFetchFiltersQuery,
} = Api;
