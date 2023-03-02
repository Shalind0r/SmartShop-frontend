/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import './index.css';
import 'shared/static/fonts/fonts.css';
import Footer from 'widgets/ui/Footer/Footer';
import Header from 'widgets/ui/Header/Header';

const App: React.FC = () => {
	return (
		<div className="App">
			<Header />
			<Footer />
		</div>
	);
};

export default App;
