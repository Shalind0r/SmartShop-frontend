import React from 'react';
import classes from './CatalogCategories.module.css';
import { ICategoryGroup, ISubCategory } from 'shared/types/ICatalog';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch } from 'store/hooks/redux';
import { fetchModels } from 'store/reducers/ModelsSlice/ModelsSlice';
import { useFetchCategoryQuery } from 'store/services/apiService';

const CatalogCategories: React.FC = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const { data } = useFetchCategoryQuery(id);
	if (!data) {
		return <div>Loading...</div>;
	}
	return (
		<div className={classes.categories}>
			<div className={classes.categories__wrapper}>
				<h2 className={'typography--h2'}>{data[0].name}</h2>
				<div className={classes.categories__columns}>
					{data &&
						data[0].categoriesGroups.map((data: ICategoryGroup) => (
							<div
								key={data.id}
								className={classes.categories__item}
							>
								<h3 className={'typography--label'}>
									{data.name}
								</h3>
								{data.subCategories.map(
									(data: ISubCategory) => (
										<Link
											to={`/${data.name}`}
											key={data.id}
											className={
												'typography--base-extended'
											}
											onClick={() =>
												dispatch(fetchModels(data.id))
											}
										>
											{data.name}
										</Link>
									),
								)}
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default CatalogCategories;
