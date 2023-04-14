import React, { lazy } from 'react';
import {
	AboutRoute,
	AuthRoute,
	BasketRoute,
	BlogListRoute,
	BlogRoute,
	ContactsRoute,
	FaqRoute,
	MainRoute,
	ProductListRoute,
	ProductRoute,
	ProfileRoute,
	RegistrationRoute,
	SearchRoute,
} from './routes_path';
import Error404 from 'pages/Error404/Error404';

const ProductList = lazy(() => import('pages/ProductList/ProductList'));
const Product = lazy(() => import('pages/Product/Product'));
const BlogList = lazy(() => import('pages/BlogList/BlogList'));
const Blog = React.lazy(() => import('pages/Blog/Blog'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const FAQ = lazy(() => import('pages/FAQ/FAQ'));
const Search = lazy(() => import('features/Search/Search'));
const Auth = lazy(() => import('features/Auth/Auth'));
const Registration = lazy(() => import('features/Registration/Registration'));
const About = lazy(() => import('pages/About/About'));
const Main = lazy(() => import('pages/Main/Main'));

export const publicRoutes = [
	{
		path: '*',
		element: <Error404 />,
	},
	{
		path: MainRoute,
		element: <Main />,
	},
	{
		path: SearchRoute,
		element: <Search />,
	},
	{
		path: RegistrationRoute,
		element: <Registration />,
	},
	{
		path: AuthRoute,
		element: <Auth />,
	},
	{
		path: ProductListRoute,
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
	},
];
