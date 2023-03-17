import React from 'react';
import classes from './Header.module.css';
import { ReactComponent as ProfileIcon } from 'icons/profile.svg';
import { ReactComponent as SearchIcon } from 'icons/search.svg';
import { ReactComponent as CatalogIcon } from 'icons/catalog.svg';
import { ReactComponent as LightningIcon } from 'icons/lightning.svg';
import { ReactComponent as FavoritesIcon } from 'icons/favorites.svg';
import { ReactComponent as BasketIcon } from 'icons/basket.svg';
import ShopLogo from 'shared/ui/logo/ShopLogo/ShopLogo';

const Header: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<header className={className}>
			<div className={classes.header}>
				<div className={classes.container}>
					<div className={classes.header__left}>
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
					</div>
					<div className={`${classes.profile} typography--base`}>
						<ProfileIcon />
						Особистий кабінет
					</div>
				</div>
			</div>
			<div className={classes.header}>
				<div className={classes.container}>
					<div className={classes.header__left}>
						<SearchIcon />a
						<div className={`${classes.navbar} typography--base`}>
							<a href="#" className={classes.navbar__bottomItem}>
								<CatalogIcon className={classes.navbar__itemIcon1} />
								Каталог товарів
							</a>
							<a href="#" className={classes.navbar__bottomItem}>
								Побутова техніка
							</a>
							<a href="#" className={classes.navbar__bottomItem}>
								електроніка
							</a>
							<a href="#" className={classes.navbar__bottomItem}>
								комп’ютерна техніка
							</a>

							<a href="#" className={classes.navbar__bottomItem}>
								дитячі товари
							</a>

							<hr />
							<a href="#" className={classes.navbar__bottomItem}>
								акції
								<LightningIcon className={classes.navbar__itemIcon2} />
							</a>
						</div>
					</div>
					<div className={classes.header__left}>
						<FavoritesIcon />
						<hr />
						<BasketIcon />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
