import React from 'react';
import classes from './FeedbackAboutCompany.module.css';
import AboutTitle from 'entities/ui/AboutTitle/AboutTitle';
import FeedbackAboutSlider from 'entities/ui/ FeedbackAboutSlider/FeedbackAboutSlider';
import FeedbackCompanyForm from 'features/ui/FeedbackCompanyForm/FeedbackCompanyForm';

const FeedbackAboutCompany: React.FC = () => {
	return (
		<div>
			<AboutTitle className={classes.title}>
				Відгуки по роботі <br /> з Компанією
			</AboutTitle>
			<FeedbackAboutSlider />
			<div className={classes.form}>
				<h3 className={'typography--h3'}>
					Залишити відгук про роботу з компанією
				</h3>
				<FeedbackCompanyForm />
			</div>
		</div>
	);
};

export default FeedbackAboutCompany;
