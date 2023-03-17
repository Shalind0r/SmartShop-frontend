/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import './index.css';
import 'shared/static/fonts/fonts.css';
import Footer from 'widgets/ui/Footer/Footer';
import Header from 'widgets/ui/Header/Header';
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

const App: React.FC = () => {
	return (
		<div className="App">
			<Header />
			<Slider />
			<TopOne />
			<News />
			<Popular />
			<GadgetsDiscount />
			<Discount />
			<PopularGadgets />
			<Novelties />
			<AdvancesFirst />
			<AdvancesSecond />
			<Footer />
		</div>
	);
};

export default App;
