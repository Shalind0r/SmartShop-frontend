import React, { ReactNode } from 'react';

import classes from './CardsTop.module.css';
interface propsTypes {
	src: string;
	title: string;
	price?: string;
	href: string;
	alt: string;
}
const CardsTop: React.FC<propsTypes> = (props) => {
	return (
		<a href={props.href} className={classes.card}>
			<img src={props.src} alt={props.alt} />
			<h4 className="typography--h4">{props.title}</h4>
			<span className="typography--base"> {props.price}</span>
		</a>
	);
};

export default CardsTop;
