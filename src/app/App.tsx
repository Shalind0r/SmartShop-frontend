/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import './index.css';
import 'shared/static/fonts/fonts.css';
import Footer from 'widgets/ui/Footer/Footer';
import Header from 'widgets/ui/Header/Header';
import Slider from 'widgets/ui/Slider/Slider';
import TopOne from 'widgets/ui/TopOne/TopOne';

const App: React.FC = () => {
	return (
		<div className="App">
			<Header />
			<Slider />
			<TopOne />
			<Footer />
		</div>
	);
};

export default App;
