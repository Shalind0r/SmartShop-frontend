import React from 'react';

import classes from './HeaderTop.module.css';
import { ReactComponent as ProfileIcon } from 'icons/profile.svg';
import {
	BlogListRoute,
	ContactsRoute,
	AboutRoute,
	FaqRoute,
} from 'app/routes_path';
import ShopLogo from 'shared/ui/logo/ShopLogo/ShopLogo';
import { Link } from 'react-router-dom';
// TODO пофиксить ховер особистий кабінет
const HeaderTop: React.FC = () => {
	return (
		<div className={classes.header}>
			<div className={`${classes.header__wrapper} container`}>
				<ShopLogo />
				<div className={`${classes.navbar} typography--base`}>
					<Link
						to={AboutRoute}
						className={`${classes.navbar__topItem} link`}
					>
						Компанія
					</Link>
					<Link
						to={BlogListRoute}
						className={`${classes.navbar__topItem} link`}
					>
						Новини
					</Link>
					<Link
						to={FaqRoute}
						className={`${classes.navbar__topItem} link`}
					>
						FAQ
					</Link>
					<Link
						to={'saasf'}
						className={`${classes.navbar__topItem} link`}
					>
						Доставка і оплата
					</Link>
					<Link
						to={ContactsRoute}
						className={`${classes.navbar__topItem} link`}
					>
						Контакти
					</Link>
				</div>
				<a
					href={'#'}
					className={`${classes.profile} typography--base link`}
				>
					<ProfileIcon />
					Особистий кабінет
				</a>
			</div>
		</div>
	);
};

export default HeaderTop;
