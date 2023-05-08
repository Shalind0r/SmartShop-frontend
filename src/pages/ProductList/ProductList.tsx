import React, { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks/redux';
import classes from './ProductList.module.css';
import { imagePath } from 'shared/static/imagePath';
import { useFetchFiltersQuery, useFetchProductsQuery } from 'store/services/apiService';
import ProductCard from 'entities/Cards/ProductCard/ProductCard';
import { useParams } from 'react-router-dom';
import ProductListMenu from 'widgets/ProductListMenu/ProductListMenu';
import FilteredImg from 'features/FilteredImg/FilteredImg';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { updatePath } from 'store/reducers/RoutesSlice/RoutesSlice';
const ProductList: React.FC = () => {
	const nodeRef = useRef(null);
	const { subCategoryId, filter, minPrice, maxPrice } = useAppSelector(
		(state) => state.productsReducer,
	);

	const { data: products } = useFetchProductsQuery({
		filter,
		minPrice,
		maxPrice,
		subCategoryId,
	});

	const { data: filters } = useFetchFiltersQuery(`${subCategoryId}`);
	const specifications = filters?.specification;
	const models = filters?.models;

	const { category, categoriesGroups, name } = useParams();
	const dispatch = useAppDispatch();
	useEffect(() => {
		const path = [`${category}`, `${categoriesGroups}`, `${name}`];
		dispatch(updatePath(path));
	}, []);
	return (
		<div className={classes.productsList}>
			<h1 className={'typography--h1'}>{name}</h1>
			<FilteredImg models={models} />
			<div className={classes.content}>
				<ProductListMenu
					filters={specifications}
					filter={filter}
					models={models}
				/>
				{products && (
					<div ref={nodeRef}>
						<TransitionGroup className={classes.products}>
							{products &&
								products.map((data, index) => (
									<CSSTransition
										nodeRef={nodeRef}
										key={index}
										timeout={500}
										classNames={{
											enter: 'appFadeEnter',
											enterActive: 'appFadeEnterActive',
											exit: 'appFadeExit',
											exitActive: 'appFadeExitActive',
										}}
									>
										<ProductCard
											key={data.id}
											src={`${imagePath}/${data.img}`}
											title={data.name}
											price={data.price}
										/>
									</CSSTransition>
								))}
						</TransitionGroup>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProductList;
