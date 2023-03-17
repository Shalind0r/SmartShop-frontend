import React from 'react';
import classes from './AdvancesItem.module.css';
interface propTypes {
	icon: React.ReactNode;
	title: string;
	content: string;
	type?: string;
}
//TODO добавить анимацию при наведении
const AdvancesItem: React.FC<propTypes> = (props) => {
	return (
		<div className={classes.advancesItem}>
			{props.icon}
			<div
				className={
					props.type === 'second'
						? classes.advancesItemSecondContent
						: classes.advancesItemContent
				}
			>
				<h2
					className={
						props.type === 'second' ? 'typography--large' : 'typography--h2'
					}
				>
					{props.title}
				</h2>
				<p className={'typography--base'}>{props.content}</p>
			</div>
		</div>
	);
};

export default AdvancesItem;
