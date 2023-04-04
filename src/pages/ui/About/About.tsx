import React from 'react';
import classes from './About.module.css';
import AboutTitle from 'widgets/ui/AboutTItle/AboutTitle';
import AboutDescription from 'widgets/ui/AboutDescription/AboutDescription';
import AboutLeader from 'widgets/ui/AboutLeader/AboutLeader';

const About: React.FC = () => {
	return (
		<div>
			<AboutTitle />
			<AboutDescription />
			<AboutLeader />
		</div>
	);
};

export default About;
