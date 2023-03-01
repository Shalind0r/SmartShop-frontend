import React, { Component, ReactNode } from 'react';
import classes from './Communication.module.css';
interface types {
	children: ReactNode;
	className?: string;
}
const Communication: React.FC<types> = ({ children, className }) => {
	return (
		<div className={className}>
			<h4 className={`${classes.title} typography--h4`}>
				Графік работи: Пн-Нд 9:00-21:00
			</h4>

			{children}
		</div>
	);
};

export default Communication;
