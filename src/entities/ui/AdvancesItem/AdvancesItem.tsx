import React from 'react';
import classes from './AdvancesItem.module.css';
interface propTypes {
	icon: React.ReactNode;
	title: string;
	content: string;
}
const AdvancesItem: React.FC<propTypes> = (props) => {
	return (
		<div className={classes.advancesItem}>
			{props.icon}
			<div>
				<h2 className={'typography--h2'}>{props.title}</h2>
				<p className={'typography--base'}>{props.content}</p>
			</div>
		</div>
	);
};

export default AdvancesItem;
