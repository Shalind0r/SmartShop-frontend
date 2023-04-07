import React from 'react';
import classes from './FeedbackAboutCompany.module.css';
import AboutTitle from 'entities/AboutTitle/AboutTitle';
import FeedbackAboutSlider from 'entities/ FeedbackAboutSlider/FeedbackAboutSlider';
import FeedbackCompanyForm from 'features/FeedbackCompanyForm/FeedbackCompanyForm';

const FeedbackAboutCompany: React.FC<{ className?: string }> = ({
	className,
}) => {
	return (
		<div className={className}>
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
