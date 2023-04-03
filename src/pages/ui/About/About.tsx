import React from 'react';
import classes from './About.module.css';
import AboutTitle from 'widgets/ui/AboutTItle/AboutTitle';
import AboutDescription from 'widgets/ui/AboutDescription/AboutDescription';

const About: React.FC = () => {
	return (
		<div>
			<AboutTitle />
			<AboutDescription />
		</div>
	);
};

export default About;
