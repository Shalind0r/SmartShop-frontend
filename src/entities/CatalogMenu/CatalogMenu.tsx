import React, { CSSProperties } from 'react';
import classes from './CatalogMenu.module.css';
import { ISubCategory } from 'shared/types/ICatalog';
import { NavLink } from 'react-router-dom';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
const CatalogMenu: React.FC<{
	data: ISubCategory[] | undefined;
	height: CSSProperties;
}> = ({ data, height }) => {
	return (
		<div style={height} className={classes.menu}>
			{data &&
				data.map((data) => (
					<NavLink
						to={CyrillicToTranslit({ preset: 'uk' }).transform(
							`${data.name}/${data.id}`,
						)}
						key={data.id}
						className={({ isActive }) =>
							isActive
								? `${classes.menu__item} ${classes.active} typography--label-2`
								: `${classes.menu__item} typography--label-2`
						}
					>
						{data.name}
					</NavLink>
				))}
		</div>
	);
};

export default CatalogMenu;
