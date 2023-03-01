/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import './index.css';
import 'shared/static/fonts/fonts.css';
import Footer from 'widgets/ui/Footer/Footer';

const App: React.FC = () => {
	return (
		<div className="App">
			<Footer />
		</div>
	);
};

export default App;
