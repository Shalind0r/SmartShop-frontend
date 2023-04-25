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
import { useFindChildRoute } from 'hooks/useFindChildRoute';

const App: React.FC = () => {
	const location = useLocation();
	const isChildOfCatalogRoute = useFindChildRoute(CatalogRoute);

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
				<div className="content">
					<Header />
					<AppRouter />
					{location.pathname !== CatalogRoute ||
						(isChildOfCatalogRoute && <Footer />)}
				</div>
			</Scrollbars>
		</div>
	);
};

export default App;
