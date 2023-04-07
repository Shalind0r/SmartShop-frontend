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
import Main from 'pages/Main/Main';
import ProductList from 'pages/ProductList/ProductList';
import Product from 'pages/Product/Product';
import Catalog from 'widgets/Catalog/Catalog';
import BlogList from 'pages/BlogList/BlogList';
import Blog from 'pages/Blog/Blog';
import Contacts from 'pages/Contacts/Contacts';
import FAQ from 'pages/FAQ/FAQ';
import Search from 'features/Search/Search';
import Auth from 'features/Auth/Auth';
import Registration from 'features/Registration/Registration';
import Profile from 'pages/Profile/Profile';
import Basket from 'features/Basket/Basket';
import About from 'pages/About/About';

export const authRoutes = [
	{
		path: ProfileRoute,
		component: Profile,
	},
	{
		path: BasketRoute,
		component: Basket,
	},
];
export const publicRoutes = [
	{
		path: MainRoute,
		component: Main,
	},
	{
		path: SearchRoute,
		component: Search,
	},
	{
		path: RegistrationRoute,
		component: Registration,
	},
	{
		path: AuthRoute,
		component: Auth,
	},
	{
		path: ProductListRoute,
		component: ProductList,
	},
	{
		path: ProductRoute + '/:id',
		component: Product,
	},
	{
		path: AboutRoute,
		component: About,
	},
	{
		path: BlogListRoute,
		component: BlogList,
	},
	{
		path: BlogRoute,
		component: Blog,
	},
	{
		path: ContactsRoute,
		component: Contacts,
	},
	{
		path: FaqRoute,
		component: FAQ,
	},
];
