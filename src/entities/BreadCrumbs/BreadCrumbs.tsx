import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './BreadCrumbs.module.css';
import CyrillicToTranslit from 'cyrillic-to-translit-js';

const BreadCrumbs = () => {
	const location = useLocation();
	let currentLink = [''];
	const crumbsArray = location.pathname
		.split('/')
		.filter((crumb) => crumb !== '');

	const faqIndex = crumbsArray.indexOf('FAQ');
	if (faqIndex !== -1) {
		crumbsArray.splice(faqIndex + 1);
	}

	const crumbs = crumbsArray.map((crumb, index) => {
		currentLink.push(crumb);
		const isLastCrumb = index === crumbsArray.length - 1;

		const displayedCrumb =
			crumb === 'FAQ'
				? crumb
				: CyrillicToTranslit({ preset: 'uk' }).reverse(crumb);

		return isLastCrumb ? (
			<span
				className={`${classes.crumbs} typography--remark`}
				key={index}
			>
				{displayedCrumb}
			</span>
		) : (
			<Link
				className={`${classes.crumbs} typography--remark`}
				to={currentLink.join('/')}
			>
				{displayedCrumb}
			</Link>
		);
	});

	return (
		<div className={classes.breadcrumbs}>
			<Link className={`${classes.main} typography--remark`} to="/">
				Головна
			</Link>
			{crumbs}
		</div>
	);
};

export default BreadCrumbs;
