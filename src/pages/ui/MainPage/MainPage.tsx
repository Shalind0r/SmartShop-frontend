import React from 'react';
import Slider from 'widgets/ui/Slider/Slider';
import TopOne from 'widgets/ui/TopOne/TopOne';
import News from 'widgets/ui/News/News';
import Popular from 'widgets/ui/Popular/Popular';
import GadgetsDiscount from 'widgets/ui/GadgetsDiscount/GadgetsDiscount';
import Discount from 'widgets/ui/Discount/Discount';
import PopularGadgets from 'widgets/ui/PopularGadgets/PopularGadgets';
import Novelties from 'widgets/ui/Novelties/Novelties';
import AdvancesFirst from 'widgets/ui/AdvancesFirst/Advances';
import AdvancesSecond from 'widgets/ui/AdvancesSecond/AdvancesSecond';
import SEO from 'widgets/ui/SEO/SEO';
import classes from './MainPage.module.css';

const MainPage: React.FC = () => {
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
			<SEO className={`${classes.mainPageGapT100} ${classes.mainPageGapB100}`} />
		</div>
	);
};

export default MainPage;
