import React from 'react';
import classes from './SeoItem.module.css';

const SeoItem: React.FC<{ title: string; children: React.ReactNode }> = ({
	title,
	children,
}) => {
	return (
		<div className={classes.seoItem}>
			<h4 className={'typography--large'}>{title}</h4>
			<p className={'typography--small'}>{children}</p>
		</div>
	);
};

export default SeoItem;
