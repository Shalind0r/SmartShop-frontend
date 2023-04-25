import React, { lazy } from 'react';
import {
	AboutRoute,
	BlogListRoute,
	BlogRoute,
	CatalogRoute,
	ContactsRoute,
	ErrorRoute,
	FaqRoute,
	MainRoute,
	ProductListRoute,
	ProductRoute,
} from './routes_path';
import {
	GeneralRoute,
	ServiceRoute,
	ReturnRoute,
	ReceivingRoute,
} from 'pages/FAQ/services/routes_path';
import Error404 from 'pages/Error404/Error404';
import { Navigate } from 'react-router-dom';

import Accordions from 'widgets/Accordions/Accordions';
import { data } from 'pages/FAQ/services/db';
import CatalogCategories from 'entities/CatalogCategories/CatalogCategories';

const Catalog = lazy(() => import('pages/Catalog/Catalog'));
const ProductList = lazy(() => import('pages/ProductList/ProductList'));
const Product = lazy(() => import('pages/Product/Product'));
const BlogList = lazy(() => import('pages/BlogList/BlogList'));
const Blog = React.lazy(() => import('pages/Blog/Blog'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const FAQ = lazy(() => import('pages/FAQ/FAQ'));
const About = lazy(() => import('pages/About/About'));
const Main = lazy(() => import('pages/Main/Main'));

export const publicRoutes = [
	{
		path: '*',
		element: <Navigate to={ErrorRoute} replace />,
	},
	{
		path: ErrorRoute,
		element: <Error404 />,
	},
	{
		path: CatalogRoute,
		element: <Catalog />,
		children: [
			{
				path: `:name/:id`,
				element: <CatalogCategories />,
			},
		],
	},

	{
		path: MainRoute,
		element: <Main />,
	},

	{
		path: `${ProductListRoute}`,
		element: <ProductList />,
	},
	{
		path: ProductRoute + '/:id',
		element: <Product />,
	},
	{
		path: AboutRoute,
		element: <About />,
	},
	{
		path: BlogListRoute,
		element: <BlogList />,
	},
	{
		path: BlogRoute,
		element: <Blog />,
	},
	{
		path: ContactsRoute,
		element: <Contacts />,
	},
	{
		path: FaqRoute,
		element: <FAQ />,
		children: [
			{
				path: GeneralRoute,
				element: <Accordions data={data.generalQuestion} />,
			},
			{
				path: ReceivingRoute,
				element: <Accordions data={data.receivingQuestion} />,
			},
			{
				path: ReturnRoute,

				element: <Accordions data={data.returnQuestion} />,
			},
			{
				path: ServiceRoute,
				element: <Accordions data={data.servicesQuestion} />,
			},
		],
	},
];
