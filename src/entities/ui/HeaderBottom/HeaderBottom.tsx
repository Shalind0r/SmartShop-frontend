import React from 'react';
import classes from './HeaderBottom.module.css';
import { ReactComponent as SearchIcon } from 'icons/search.svg';
import { ReactComponent as CatalogIcon } from 'icons/catalog.svg';
import { ReactComponent as LightningIcon } from 'icons/lightning.svg';
import { ReactComponent as FavoritesIcon } from 'icons/favorites.svg';
import { ReactComponent as BasketIcon } from 'icons/basket.svg';
import { ReactComponent as CloseIcon } from 'icons/close.svg';
import { useAppDispatch, useAppSelector } from 'store/hooks/redux';
import {
	CloseCatalog,
	OpenCatalog,
} from 'store/reducers/CatalogSlice/CatalogSlice';

const HeaderBottom: React.FC = () => {
	const dispatch = useAppDispatch();
	const { isOpen } = useAppSelector((state) => state.catalogReducer);
	return (
		<div className={classes.header}>
			<div className={`${classes.header__wrapper} container`}>
				<div className={`${classes.navbar} typography--base`}>
					<SearchIcon
						style={isOpen === true ? { opacity: 0 } : {}}
						className={classes.search}
					/>
					<CloseIcon
						style={isOpen === false ? { opacity: 0 } : {}}
						onClick={() => dispatch(CloseCatalog())}
						className={classes.close}
					/>
					<a
						onClick={() => dispatch(OpenCatalog())}
						className={
							isOpen === true
								? `${classes.navbar__catalog} ${classes.active}`
								: `${classes.navbar__catalog} link`
						}
					>
						<CatalogIcon />
						Каталог товарів
					</a>
					<div
						style={isOpen === true ? { opacity: 0 } : {}}
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
					style={isOpen === true ? { opacity: 0 } : {}}
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
