import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './BreadCrumbs.module.css';

import { CatalogRoute } from 'app/routes_path';
import { useAppDispatch, useAppSelector } from 'store/hooks/redux';
import { setPreviousPath } from 'store/reducers/RoutesSlice/RoutesSlice';

const BreadCrumbs = () => {
	const location = useLocation();
	const { path, category, categoryGroup, subCategory } = useAppSelector(
		(state) => state.routesReducer,
	);
	const dispatch = useAppDispatch();
	let currentLink = [''];
	const crumbsArray = location.pathname.split('/').filter((crumb) => crumb !== '');

	const faqIndex = crumbsArray.indexOf('FAQ');
	if (faqIndex !== -1) {
		crumbsArray.splice(faqIndex + 1);
	}

	const crumbs = crumbsArray.map((crumb, index) => {
		currentLink.push(crumb);
		const isLastCrumb = index === crumbsArray.length - 1;

		const decodedCrumb = decodeURIComponent(crumb); // Декодирование символов URL

		return isLastCrumb ? (
			<span
				className={`${classes.crumbs} ${classes.last} typography--remark`}
				key={index}
			>
				{decodedCrumb}
			</span>
		) : (
			<Link
				key={index}
				className={`${classes.crumbs} typography--remark`}
				to={currentLink.join('/')}
			>
				{decodedCrumb}
			</Link>
		);
	});

	return (
		<div className={classes.breadcrumbs}>
			<Link className={`${classes.main} typography--remark`} to="/">
				Головна
			</Link>
			{location.pathname === path ? (
				<>
					<Link to={CatalogRoute} className={`typography--remark`}>
						Каталог
					</Link>
					<Link
						onClick={() => dispatch(setPreviousPath(location.pathname))}
						to={`${CatalogRoute}/${category}`}
						className={`${classes.crumbs} typography--remark`}
					>
						{category}
					</Link>
					<Link
						onClick={() => dispatch(setPreviousPath(location.pathname))}
						to={`${CatalogRoute}/${category}`}
						className={`${classes.crumbs} typography--remark`}
					>
						{categoryGroup}
					</Link>
					<span
						className={`${classes.crumbs} ${classes.last} typography--remark`}
					>
						{subCategory}
					</span>
				</>
			) : (
				crumbs
			)}
		</div>
	);
};

export default BreadCrumbs;
