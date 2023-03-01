import React from 'react';
import classes from './ButtonAction.module.css';

interface props {
	children: string;
	className?: string;
}

const ButtonAction: React.FC<props> = ({ children, className }) => {
	return (
		<button className={`${classes.button} ${className} typography--label `}>
			{children}
		</button>
	);
};

export default ButtonAction;
