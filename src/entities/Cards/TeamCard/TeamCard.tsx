import React from 'react';
import classes from './TeamCard.module.css';
interface IProps {
	firstName: string;
	lastName: string;
	job: string;
	src: string;
}
const TeamCard: React.FC<IProps> = (props) => {
	return (
		<div className={classes.card}>
			<div className={classes.text}>
				<h3 className={'typography--h3'}>
					<span>{props.firstName}</span>
					<br />
					<span>{props.lastName}</span>
				</h3>
				<p className={'typography--base'}>{props.job}</p>
			</div>
			<img src={props.src} alt={'фотографія працівника'} />
		</div>
	);
};

export default TeamCard;
