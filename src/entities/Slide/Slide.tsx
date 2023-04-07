import React, { useState } from 'react';
import classes from 'widgets/Slider/Slider.module.css';
import ButtonAction from 'shared/ui/buttons/ButtonAction/ButtonAction';

interface propsTypes {
	title: string;
	label: string;
	price: string;
	src: string;
}

const Slide: React.FC<propsTypes> = (props) => {
	return (
		<div className={classes.slide}>
			<img src={props.src} />
			<div className={classes.slideDescription}>
				<div className={classes.slideDescription__item}>
					<div className={`${classes.title} typography--h1`}>
						{props.title}
					</div>
					<ButtonAction
						className={classes.button}
						type="link"
						link="#"
					>
						Детальніше
					</ButtonAction>
				</div>
				<div
					className={`${classes.slideDescription__item} typography--h1`}
				>
					<div className={`${classes.label} typography--large`}>
						{props.label}
					</div>
					<p className={classes.price}>{props.price}</p>
				</div>
			</div>
		</div>
	);
};

export default Slide;
