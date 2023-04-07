import React from 'react';
import classes from './AboutTitle.module.css';
import { ReactComponent as Cube } from 'shared/static/images/About/cube.svg';
const AboutTitle: React.FC<{
	children: React.ReactNode;
	className?: string;
}> = ({ children, className }) => {
	return (
		<div className={`${classes.title} ${className}`}>
			<Cube />
			<h2 className={'typography--extra-large'}>{children}</h2>
		</div>
	);
};

export default AboutTitle;
