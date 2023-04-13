import React from 'react';
import classes from './BlogList.module.css';

import { state } from 'pages/BlogList/testdb';

import CardNews from 'entities/Cards/CardNews/CardNews';
const BlogList: React.FC = () => {
	return (
		<div className={classes.blogList}>
			<h1 className={'typography--h1'}>Новини</h1>
			<div className={classes.wrapper}>
				{state.map((state, index) => (
					<CardNews key={index} {...state} />
				))}
			</div>
		</div>
	);
};

export default BlogList;
