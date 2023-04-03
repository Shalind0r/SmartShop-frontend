import React from 'react';
import classes from './Catalog.module.css';
import { useAppSelector } from 'store/hooks/redux';
import CatalogMenu from 'entities/ui/CatalogMenu/CatalogMenu';
import CatalogCategories from 'entities/ui/CatalogCategories/CatalogCategories';
const Catalog: React.FC = () => {
	const { isOpen } = useAppSelector((state) => state.catalogReducer);
	return (
		<div
			className={classes.catalog}
			style={isOpen === false ? { opacity: 0, zIndex: -1 } : {}}
		>
			<div className={`${classes.wrapper} `}>
				<div className={`${classes.container} container`}>
					<CatalogMenu />
					<CatalogCategories />
				</div>
			</div>
		</div>
	);
};

export default Catalog;
