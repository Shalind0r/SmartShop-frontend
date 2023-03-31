import React from 'react';
import classes from './HeaderBottom.module.css';
import { ReactComponent as SearchIcon } from 'icons/search.svg';
import { ReactComponent as CatalogIcon } from 'icons/catalog.svg';
import { ReactComponent as LightningIcon } from 'icons/lightning.svg';
import { ReactComponent as FavoritesIcon } from 'icons/favorites.svg';
import { ReactComponent as BasketIcon } from 'icons/basket.svg';
import { ReactComponent as CloseIcon } from 'icons/close.svg';

const HeaderBottom: React.FC = () => {
	return (
		<div className={classes.header}>
			<div className={`${classes.header__wrapper} container`}>
				<div className={`${classes.navbar} typography--base`}>
					<SearchIcon className={classes.search} />
					<CloseIcon className={classes.close} />
					<a className={classes.navbar__catalog}>
						<CatalogIcon />
						Каталог товарів
					</a>
					<div className={classes.navbar__items}>
						<a href="#" className={classes.navbar__item}>
							Побутова техніка
						</a>
						<a href="#" className={classes.navbar__item}>
							електроніка
						</a>
						<a href="#" className={classes.navbar__item}>
							комп’ютерна техніка
						</a>
						<a href="#" className={classes.navbar__item}>
							дитячі товари
						</a>
						<hr />
						<a href="#" className={classes.navbar__item}>
							акції
							<LightningIcon
								className={classes.navbar__itemIcon2}
							/>
						</a>
					</div>
				</div>
				<div className={classes.products}>
					<FavoritesIcon />
					<hr />
					<BasketIcon />
				</div>
			</div>
		</div>
	);
};

export default HeaderBottom;
