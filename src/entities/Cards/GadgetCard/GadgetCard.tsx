import React from 'react';
import classes from './GadgetCard.module.css';

interface propTypes {
	src: string;
	alt: string;
	type: string;
	href: string;
	title: string;
	price?: string;
}

const GadgetCard: React.FC<propTypes> = (props) => {
	return (
		<a
			href={props.href}
			className={
				props.type === 'small'
					? `${classes.smallCard} ${classes.card}`
					: props.type === 'wide'
					? `${classes.wideCard} ${classes.card}`
					: props.type === 'popular'
					? `${classes.popularCard} ${classes.card}`
					: ''
			}
		>
			<div className={classes.image}>
				<img src={props.src} alt={props.alt} />
			</div>
			<div className={classes.text}>
				<p className={'typography--h4'}>{props.title}</p>
				{props.type === 'popular' ? (
					<span className={'typography--base'}>{props.price}</span>
				) : (
					''
				)}
			</div>
		</a>
	);
};

export default GadgetCard;
