import React from 'react';
import classes from './CardNews.module.css';
interface propsType {
	className?: string;
	src: string;
	alt: string;
	title: string;
	content: string;
	date: string;
	href: string;
}
const CardNews: React.FC<propsType> = (props) => {
	return (
		<a href={props.href} className={`${classes.card}  ${props.className}`}>
			<img src={props.src} alt={props.alt} />
			<div className={classes.content}>
				<h4 className="typography--base">{props.title}</h4>
				<p className="typography--small">{props.content}</p>
				<span className="typography--small">{props.date}</span>
			</div>
		</a>
	);
};

export default CardNews;
