import React from 'react';
import classes from './HeaderBottom.module.css';
import { ReactComponent as SearchIcon } from 'icons/search.svg';
import { ReactComponent as CatalogIcon } from 'icons/catalog.svg';
import { ReactComponent as LightningIcon } from 'icons/lightning.svg';
import { ReactComponent as FavoritesIcon } from 'icons/favorites.svg';
import { ReactComponent as BasketIcon } from 'icons/basket.svg';
import { ReactComponent as CloseIcon } from 'icons/close.svg';
import { NavLink } from 'react-router-dom';
import { CatalogRoute } from 'app/routes_path';
interface IProps {
	routeAndChild: boolean;
	style: React.CSSProperties;
	closeCatalog: () => void;
	visitedRoutes: string[];
}

const HeaderBottom: React.FC<IProps> = (props) => {
	return (
		<div className={classes.header}>
			<div className={`${classes.header__wrapper} container`}>
				<div className={`${classes.navbar} typography--base`}>
					<SearchIcon
						style={props.routeAndChild ? props.style : {}}
						className={classes.search}
					/>
					<CloseIcon
						style={!props.routeAndChild ? props.style : {}}
						onClick={props.closeCatalog}
						className={classes.close}
					/>
					<NavLink
						to={CatalogRoute}
						className={
							props.routeAndChild
								? `${classes.navbar__catalog} ${classes.navbar__catalog_active} `
								: `${classes.navbar__catalog} link`
						}
					>
						<CatalogIcon />
						Каталог товарів
					</NavLink>
					<div
						style={props.routeAndChild ? props.style : {}}
						className={classes.navbar__items}
					>
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
							<LightningIcon
								className={classes.navbar__itemIcon2}
							/>
						</a>
					</div>
				</div>
				<div
					style={props.routeAndChild ? props.style : {}}
					className={classes.products}
				>
					<FavoritesIcon />
					<hr />
					<BasketIcon />
				</div>
			</div>
		</div>
	);
};

export default HeaderBottom;
