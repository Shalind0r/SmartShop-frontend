/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import './index.css';
import 'shared/static/fonts/fonts.css';
import Footer from 'widgets/ui/Footer/Footer';
import Header from 'widgets/ui/Header/Header';
import { Scrollbars } from 'react-custom-scrollbars-2';
import AppRouter from './AppRouter';
//Добавить везде где это необходимо ленивую загрузку
const App: React.FC = () => {
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
