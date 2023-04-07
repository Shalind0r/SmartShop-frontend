import React, { useState } from 'react';
import classes from './About.module.css';
import AboutStart from 'widgets/AboutStart/AboutStart';
import AboutDescription from 'widgets/AboutDescription/AboutDescription';
import AboutLeader from 'widgets/AboutLeader/AboutLeader';
import SuccessStory from 'widgets/SuccessStory/SuccessStory';
import AboutTitle from 'entities/AboutTitle/AboutTitle';
import Team from 'widgets/Team/Team';
import Credo from 'widgets/Credo/Credo';
import FeedbackAboutCompany from 'widgets/FeedbackAboutCompany/FeedbackAboutCompany';

const About: React.FC = () => {
	return (
		<div>
			<AboutStart className={classes.start} />
			<AboutDescription />
			<AboutLeader />
			<div className={classes.successStoryAndTeam}>
				<AboutTitle className={classes.successStoryAndTeam__title}>
					Історія успіху і <br /> Наша команда
				</AboutTitle>
				<SuccessStory className={classes.successStory} />
				<Team />
				<Credo className={classes.credo} />
			</div>
			<FeedbackAboutCompany className={classes.feedback} />
		</div>
	);
};

export default About;
