import {
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
import Main from 'pages/ui/Main/Main';
import ProductList from 'pages/ui/ProductList/ProductList';
import Product from 'pages/ui/Product/Product';
import Catalog from 'widgets/ui/Catalog/Catalog';
import BlogList from 'pages/ui/BlogList/BlogList';
import Blog from 'pages/ui/Blog/Blog';
import Contacts from 'pages/ui/Contacts/Contacts';
import FAQ from 'pages/ui/FAQ/FAQ';
import Search from 'features/ui/Search/Search';
import Auth from 'features/ui/Auth/Auth';
import Registration from 'features/ui/Registration/Registration';
import Profile from 'pages/ui/Profile/Profile';
import Basket from 'features/ui/Basket/Basket';

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
