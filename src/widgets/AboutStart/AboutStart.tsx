import React from 'react';
import classes from './AboutStart.module.css';
import title from 'shared/static/images/About/title.jpg';
import ShopLogo from 'shared/ui/logo/ShopLogo/ShopLogo';

const AboutStart: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<div className={`${className} ${classes.title}`}>
			<img src={title} alt="зображення приміщеня магазину" />
			<div className={classes.label}>
				<ShopLogo type={'large'} />
				<div className={`${classes.text} typography--extra-large`}>
					<p>- Найбільша мережа</p>
					<p>техніки та продукції Apple Premium</p>
					<p>в країні</p>
				</div>
			</div>
		</div>
	);
};

export default AboutStart;
