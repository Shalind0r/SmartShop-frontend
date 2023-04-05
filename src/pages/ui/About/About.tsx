import React, { useState } from 'react';
import classes from './About.module.css';
import AboutStart from 'widgets/ui/AboutStart/AboutStart';
import AboutDescription from 'widgets/ui/AboutDescription/AboutDescription';
import AboutLeader from 'widgets/ui/AboutLeader/AboutLeader';
import SuccessStory from 'widgets/ui/SuccessStory/SuccessStory';
import AboutTitle from 'entities/ui/AboutTitle/AboutTitle';
import Team from 'widgets/ui/Team/Team';
import Credo from 'widgets/ui/Credo/Credo';
import FeedbackAboutCompany from 'widgets/ui/FeedbackAboutCompany/FeedbackAboutCompany';

const About: React.FC = () => {
	return (
		<div>
			<AboutStart />
			<AboutDescription />
			<AboutLeader />
			<div className={classes.successStoryAndTeam}>
				<AboutTitle className={classes.successStoryAndTeam__title}>
					Історія успіху і <br /> Наша команда
				</AboutTitle>
				<SuccessStory />
				<Team />
				<Credo className={classes.credo} />
			</div>
			<FeedbackAboutCompany />
		</div>
	);
};

export default About;
