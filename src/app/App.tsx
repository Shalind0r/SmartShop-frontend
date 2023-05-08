/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import './index.css';
import 'shared/static/fonts/fonts.css';
import Footer from 'widgets/Footer/Footer';
import Header from 'widgets/Header/Header';
import { Scrollbars } from 'react-custom-scrollbars-2';
import AppRouter from './AppRouter';
import { useLocation } from 'react-router-dom';
import { CatalogRoute } from 'app/routes_path';
import { useAppSelector } from 'store/hooks/redux';

const App: React.FC = () => {
	const location = useLocation();

	const { hiddenPath } = useAppSelector((state) => state.routesReducer);
	const footer =
		location.pathname === encodeURI(CatalogRoute) || location.pathname === hiddenPath;

	return (
		<div className="App">
			<Scrollbars
				className={'react-custom-scrollbars-2 '}
				renderTrackVertical={(props) => (
					<div {...props} className="track-vertical" />
				)}
				renderThumbVertical={(props) => (
					<div {...props} className="thumb-vertical" />
				)}
				style={{ width: '100vw', height: '100vh' }}
			>
				<div className={'wrapper'}>
					<Header />
					<AppRouter className={'content'} />
					{!footer && <Footer />}
				</div>
			</Scrollbars>
		</div>
	);
};

export default App;
