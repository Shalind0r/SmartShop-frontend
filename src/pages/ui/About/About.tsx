import React, { useState } from 'react';
import classes from './About.module.css';
import AboutStart from 'widgets/ui/AboutStart/AboutStart';
import AboutDescription from 'widgets/ui/AboutDescription/AboutDescription';
import AboutLeader from 'widgets/ui/AboutLeader/AboutLeader';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import SuccessStory from 'widgets/ui/SuccessStory/SuccessStory';
import AboutTitle from 'entities/ui/AboutTitle/AboutTitle';

const About: React.FC = () => {
	return (
		<div>
			<AboutStart />
			<AboutDescription />
			<AboutLeader />
			<div className={classes.successStoryAndTeam}>
				<AboutTitle className={classes.successStoryAndTeam__title}>
					Історія успіху і Наша команда
				</AboutTitle>
				<SuccessStory />
			</div>
		</div>
	);
};

export default About;
