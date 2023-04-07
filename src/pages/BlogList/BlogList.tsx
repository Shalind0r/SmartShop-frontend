import React from 'react';
import classes from './BlogList.module.css';
import { useMap } from 'hooks/useMap';
import { state } from 'pages/BlogList/testdb';
import cardNews from 'entities/Cards/CardNews/CardNews';
const BlogList: React.FC = () => {
	return (
		<div className={classes.blogList}>
			<h1 className={'typography--h1'}>Новини</h1>
			<div className={classes.wrapper}>
				{useMap({ data: state, component: cardNews })}
			</div>
		</div>
	);
};

export default BlogList;
