import React, { CSSProperties, Suspense, useRef } from 'react';
import { useLocation, useRoutes, matchPath, RouteProps } from 'react-router-dom';
import { publicRoutes } from './routes';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { ClipLoader } from 'react-spinners';
import classes from './App.module.css';
import { AboutRoute, CatalogRoute, ErrorRoute, MainRoute } from 'app/routes_path';
import BreadCrumbs from 'entities/BreadCrumbs/BreadCrumbs';
import { useAppSelector } from 'store/hooks/redux';
import breadCrumbsReducer from 'store/reducers/RoutesSlice/RoutesSlice';

const AppRouter: React.FC<{ className?: string }> = ({ className }) => {
	const nodeRef = useRef(null);
	let isAuth = false;
	const override: CSSProperties = {
		borderWidth: '10px',
	};

	const routes = useRoutes(publicRoutes);
	const location = useLocation();
	const pathSegments = location.pathname.split('/');
	const key = pathSegments.length === 2 ? location.pathname : '';

	const { hiddenPath } = useAppSelector((state) => state.routesReducer);
	const rulesArr = [
		encodeURI(MainRoute),
		encodeURI(ErrorRoute),
		encodeURI(CatalogRoute),
		encodeURI(AboutRoute),
		hiddenPath,
	];

	const containerClassName = !rulesArr.includes(location.pathname)
		? classes.container
		: '';

	return (
		<div className={className}>
			<SwitchTransition>
				<CSSTransition
					nodeRef={nodeRef}
					key={key}
					timeout={400}
					classNames={{
						enter: 'appFadeEnter',
						enterActive: 'appFadeEnterActive',
						exit: 'appFadeExit',
						exitActive: 'appFadeExitActive',
					}}
				>
					{(state) => (
						<div className={containerClassName} ref={nodeRef}>
							<Suspense
								fallback={
									<div className={'spinner'}>
										<ClipLoader
											color="#f1e846"
											size={300}
											speedMultiplier={1}
											cssOverride={override}
										/>
									</div>
								}
							>
								{!rulesArr.includes(location.pathname) && <BreadCrumbs />}
								{routes}
							</Suspense>
						</div>
					)}
				</CSSTransition>
			</SwitchTransition>
		</div>
	);
};

export default AppRouter;
