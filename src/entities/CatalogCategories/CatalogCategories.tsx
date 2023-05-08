import React, { useEffect } from 'react';
import classes from './CatalogCategories.module.css';
import { ICategoryGroup, ISubCategory } from 'shared/types/ICatalog';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch } from 'store/hooks/redux';
import { useFetchCategoryQuery } from 'store/services/apiService';
import { setSubCategoryId } from 'store/reducers/ProductsSlice/ProductsSlice';
import { setHiddenPath } from 'store/reducers/RoutesSlice/RoutesSlice';

import { CatalogRoute } from 'app/routes_path';

const CatalogCategories: React.FC = () => {
	const { name, id } = useParams();
	const dispatch = useAppDispatch();
	const { data } = useFetchCategoryQuery(`${id}`);

	useEffect(() => {
		dispatch(setHiddenPath(`${CatalogRoute.slice(0, -1)}${name}/${id}`));
	});

	return (
		<div className={classes.categories}>
			<div className={classes.categories__wrapper}>
				<h2 className={'typography--h2'}>{name}</h2>
				<div className={classes.categories__columns}>
					{data &&
						data[0].categoriesGroups.map(
							(categoriesGroups: ICategoryGroup) => (
								<div
									key={categoriesGroups.id}
									className={classes.categories__item}
								>
									<h3 className={'typography--label'}>
										{categoriesGroups.name}
									</h3>
									{categoriesGroups.subCategories.map(
										(subCategories: ISubCategory) => (
											<Link
												to={`/${name}/${categoriesGroups.name}/${subCategories.name}`}
												key={subCategories.id}
												className={'typography--base-extended'}
												onClick={() =>
													dispatch(
														setSubCategoryId(
															subCategories.id,
														),
													)
												}
											>
												{subCategories.name}
											</Link>
										),
									)}
								</div>
							),
						)}
				</div>
			</div>
		</div>
	);
};

export default CatalogCategories;
