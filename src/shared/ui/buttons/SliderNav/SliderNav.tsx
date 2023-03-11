import React from 'react';
import { ReactComponent as NavIcon } from 'icons/buttons/arrow.svg';
import classes from './SliderNav.module.css';
interface propType {
	className: string;
	type: string;
}

const SliderNav: React.FC<propType> = ({ className, type }) => {
	return (
		<span className={` ${className} ${classes.sliderNav}`}>
			<NavIcon
				className={type === 'next' ? '' : type === 'prev' ? classes.prev : ''}
			/>
		</span>
	);
};

export default SliderNav;
