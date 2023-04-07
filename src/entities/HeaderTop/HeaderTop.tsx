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
import { NavLink } from 'react-router-dom';

const HeaderTop: React.FC = () => {
	return (
		<div className={classes.header}>
			<div className={`${classes.header__wrapper} container`}>
				<ShopLogo />
				<div className={`${classes.navbar} typography--base`}>
					<NavLink
						to={AboutRoute}
						className={`${classes.navbar__topItem} link`}
					>
						Компанія
					</NavLink>
					<NavLink
						to={BlogListRoute}
						className={`${classes.navbar__topItem} link`}
					>
						Новини
					</NavLink>
					<NavLink
						to={FaqRoute}
						className={`${classes.navbar__topItem} link`}
					>
						FAQ
					</NavLink>
					<NavLink
						to={'saasf'}
						className={`${classes.navbar__topItem} link`}
					>
						Доставка і оплата
					</NavLink>
					<NavLink
						to={ContactsRoute}
						className={`${classes.navbar__topItem} link`}
					>
						Контакти
					</NavLink>
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
