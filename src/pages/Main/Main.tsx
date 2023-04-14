import React from 'react';
import Slider from 'widgets/Slider/Slider';
import TopOne from 'widgets/TopOne/TopOne';
import News from 'widgets/News/News';
import Popular from 'widgets/Popular/Popular';
import GadgetsDiscount from 'widgets/GadgetsDiscount/GadgetsDiscount';
import Discount from 'widgets/Discount/Discount';
import PopularGadgets from 'widgets/PopularGadgets/PopularGadgets';
import Novelties from 'widgets/Novelties/Novelties';
import AdvancesFirst from 'widgets/AdvancesFirst/Advances';
import AdvancesSecond from 'widgets/AdvancesSecond/AdvancesSecond';
import SEO from 'widgets/SEO/SEO';
import classes from './Main.module.css';

const Main: React.FC = () => {
	return (
		<div>
			<Slider />
			<TopOne />
			<News />
			<Popular className={classes.mainPageGapT62} />
			<GadgetsDiscount className={classes.mainPageGapT62} />
			<Discount
				title={'Акции и новости'}
				className={classes.mainPageGapT62}
			/>
			<PopularGadgets className={classes.mainPageGapT62} />
			<Novelties className={classes.mainPageGapT62} />
			<AdvancesFirst className={classes.mainPageGapT100} />
			<AdvancesSecond />
			<SEO
				className={`${classes.mainPageGapT100} ${classes.mainPageGapB100}`}
			/>
		</div>
	);
};

export default Main;
