import React, { useState } from 'react';
import classes from './HeaderBottom.module.css';
import { ReactComponent as SearchIcon } from 'icons/search.svg';
import { ReactComponent as CatalogIcon } from 'icons/catalog.svg';
import { ReactComponent as LightningIcon } from 'icons/lightning.svg';
import { ReactComponent as FavoritesIcon } from 'icons/favorites.svg';
import { ReactComponent as BasketIcon } from 'icons/basket.svg';
import { ReactComponent as CloseIcon } from 'icons/close.svg';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CatalogRoute } from 'app/routes_path';
import { useAppDispatch, useAppSelector } from 'store/hooks/redux';
import { setPreviousPath } from 'store/reducers/RoutesSlice/RoutesSlice';

const HeaderBottom: React.FC = (props) => {
	const location = useLocation();
	const { hiddenPath, previousPath } = useAppSelector((state) => state.routesReducer);
	const dispatch = useAppDispatch();
	const style = { opacity: 0 };
	const rule = location.pathname === hiddenPath;

	return (
		<div className={classes.header}>
			<div className={`${classes.header__wrapper} container`}>
				<div className={`${classes.navbar} typography--base`}>
					<SearchIcon style={rule ? style : {}} className={classes.search} />
					<Link className={classes.close} to={previousPath}>
						<CloseIcon style={!rule ? style : {}} />
					</Link>
					<NavLink
						to={CatalogRoute}
						onClick={() => dispatch(setPreviousPath(location.pathname))}
						className={
							rule
								? `${classes.navbar__catalog} ${classes.navbar__catalog_active} `
								: `${classes.navbar__catalog} link`
						}
					>
						<CatalogIcon />
						Каталог товарів
					</NavLink>
					<div style={rule ? style : {}} className={classes.navbar__items}>
						<a href="#" className={'link'}>
							Побутова техніка
						</a>
						<a href="#" className={'link'}>
							електроніка
						</a>
						<a href="#" className={'link'}>
							комп’ютерна техніка
						</a>
						<a href="#" className={'link'}>
							дитячі товари
						</a>
						<hr />
						<a href="#" className={'link'}>
							акції
							<LightningIcon className={classes.navbar__itemIcon2} />
						</a>
					</div>
				</div>
				<div style={rule ? style : {}} className={classes.products}>
					<FavoritesIcon />
					<hr />
					<BasketIcon />
				</div>
			</div>
		</div>
	);
};

export default HeaderBottom;
