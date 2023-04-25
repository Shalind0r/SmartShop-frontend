import React, { CSSProperties, Suspense, useRef } from 'react';
import {
	useLocation,
	useRoutes,
	matchPath,
	RouteProps,
} from 'react-router-dom';
import { publicRoutes } from './routes';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { ClipLoader } from 'react-spinners';
import classes from './App.module.css';
import {
	AboutRoute,
	CatalogRoute,
	ErrorRoute,
	MainRoute,
} from 'app/routes_path';
import BreadCrumbs from 'entities/BreadCrumbs/BreadCrumbs';
import { useFindChildRoute } from 'hooks/useFindChildRoute';

const AppRouter: React.FC = () => {
	const nodeRef = useRef(null);
	let isAuth = false;
	const override: CSSProperties = {
		borderWidth: '10px',
	};

	const routes = useRoutes(publicRoutes);
	const location = useLocation();
	const pathSegments = location.pathname.split('/');
	const key = pathSegments.length === 2 ? location.pathname : '';

	const isChildOfCatalogRoute = useFindChildRoute(CatalogRoute);
	const shouldHideBreadcrumbs = () => {
		const pathsToHide = [MainRoute, ErrorRoute, CatalogRoute, AboutRoute];
		const exactMatch = pathsToHide.some(
			(path) => location.pathname === path,
		);

		return exactMatch || isChildOfCatalogRoute;
	};

	const containerClassName = !shouldHideBreadcrumbs()
		? classes.container
		: '';
	return (
		<div>
			<SwitchTransition>
				<CSSTransition
					nodeRef={nodeRef}
					key={key}
					timeout={300}
					classNames={{
						enter: classes.appFadeEnter,
						enterActive: classes.appFadeEnterActive,
						exit: classes.appFadeExit,
						exitActive: classes.appFadeExitActive,
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
								{!shouldHideBreadcrumbs() && <BreadCrumbs />}
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
