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
			<Popular className={classes.mainPageGapT50} />
			<GadgetsDiscount className={classes.mainPageGapT50} />
			<Discount className={classes.mainPageGapT50} />
			<PopularGadgets className={classes.mainPageGapT50} />
			<Novelties className={classes.mainPageGapT50} />
			<AdvancesFirst className={classes.mainPageGapT100} />
			<AdvancesSecond />
			<SEO
				className={`${classes.mainPageGapT100} ${classes.mainPageGapB100}`}
			/>
		</div>
	);
};

export default Main;
