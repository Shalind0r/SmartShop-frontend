/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import './index.css';
import 'shared/static/fonts/fonts.css';
import Footer from 'widgets/Footer/Footer';
import Header from 'widgets/Header/Header';
import { Scrollbars } from 'react-custom-scrollbars-2';
import AppRouter from './AppRouter';
import BreadCrumbs from 'widgets/BreadCrumbs/BreadCrumbs';
import { useLocation } from 'react-router-dom';
import { AboutRoute, ErrorRoute, MainRoute } from 'app/routes_path';

const App: React.FC = () => {
	const location = useLocation();
	return (
		<div className="App">
			<Scrollbars
				renderTrackVertical={(props) => (
					<div {...props} className="track-vertical" />
				)}
				renderThumbVertical={(props) => (
					<div {...props} className="thumb-vertical" />
				)}
				style={{ width: '100vw', height: '100vh' }}
			>
				<div className="content">
					<Header />
					<AppRouter />
					<Footer />
				</div>
			</Scrollbars>
		</div>
	);
};

export default App;
