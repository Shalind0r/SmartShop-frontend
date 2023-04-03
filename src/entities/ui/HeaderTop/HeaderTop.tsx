import React from 'react';

import classes from './HeaderTop.module.css';
import { ReactComponent as ProfileIcon } from 'icons/profile.svg';

import ShopLogo from 'shared/ui/logo/ShopLogo/ShopLogo';

const HeaderTop: React.FC = () => {
	return (
		<div className={classes.header}>
			<div className={`${classes.header__wrapper} container`}>
				<ShopLogo />
				<div className={`${classes.navbar} typography--base`}>
					<a href="#" className={classes.navbar__topItem}>
						Компанія
					</a>
					<a href="#" className={classes.navbar__topItem}>
						Новини
					</a>
					<a href="#" className={classes.navbar__topItem}>
						FAQ
					</a>
					<a href="#" className={classes.navbar__topItem}>
						Доставка і оплата
					</a>
					<a href="#" className={classes.navbar__topItem}>
						Контакти
					</a>
				</div>
				<a href={'#'} className={`${classes.profile} typography--base`}>
					<ProfileIcon />
					Особистий кабінет
				</a>
			</div>
		</div>
	);
};

export default HeaderTop;
