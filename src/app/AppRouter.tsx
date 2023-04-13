import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes, authRoutes } from './routes';
import Error404 from 'pages/Error404/Error404';

const AppRouter: React.FC = () => {
	let isAuth = false;
	return (
		<div>
			<Routes>
				{isAuth &&
					authRoutes.map(({ path, component: Component }) => (
						<Route
							path={path}
							key={path}
							element={<Component />}
							caseSensitive={true}
						/>
					))}
				{publicRoutes.map(({ path, component: Component }) => (
					<Route
						path={path}
						key={path}
						element={<Component />}
						caseSensitive={true}
					/>
				))}
			</Routes>
		</div>
	);
};

export default AppRouter;
