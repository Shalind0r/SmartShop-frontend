import React from 'react';
import classes from './HeaderBottom.module.css';
import { ReactComponent as SearchIcon } from 'icons/search.svg';
import { ReactComponent as CatalogIcon } from 'icons/catalog.svg';
import { ReactComponent as LightningIcon } from 'icons/lightning.svg';
import { ReactComponent as FavoritesIcon } from 'icons/favorites.svg';
import { ReactComponent as BasketIcon } from 'icons/basket.svg';
import { ReactComponent as CloseIcon } from 'icons/close.svg';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { CatalogRoute } from 'app/routes_path';


const HeaderBottom: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const goBack = () => navigate(-1);
	let disabledElement = location.pathname === CatalogRoute ? { opacity: 0 } : {};
	return (
		<div className={classes.header}>
			<div className={`${classes.header__wrapper} container`}>
				<div className={`${classes.navbar} typography--base`}>
					<SearchIcon style={disabledElement} className={classes.search} />
					<CloseIcon style={location.pathname !== CatalogRoute
						? { opacity: 0 } : {}} onClick={goBack} className={classes.close} />
					<NavLink to={CatalogRoute} className={({ isActive }) =>
						isActive ? `${classes.activeLink} ${classes.navbar__catalog}` : classes.navbar__catalog
					}>
						<CatalogIcon />
						Каталог товарів
					</NavLink>
					<div style={disabledElement} className={classes.navbar__items}>
						<a href='#' className={classes.navbar__item}>
							Побутова техніка
						</a>
						<a href='#' className={classes.navbar__item}>
							електроніка
						</a>
						<a href='#' className={classes.navbar__item}>
							комп’ютерна техніка
						</a>
						<a href='#' className={classes.navbar__item}>
							дитячі товари
						</a>
						<hr />
						<a href='#' className={classes.navbar__item}>
							акції
							<LightningIcon className={classes.navbar__itemIcon2} />
						</a>

					</div>
				</div>
				<div style={disabledElement} className={classes.products}>
					<FavoritesIcon />
					<hr />
					<BasketIcon />
				</div>
			</div>

		</div>
	);
};

export default HeaderBottom;
