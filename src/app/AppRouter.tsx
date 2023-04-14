import React, { CSSProperties, Suspense, useRef } from 'react';
import { useLocation, useRoutes, matchPath } from 'react-router-dom';
import { publicRoutes } from './routes';
import Error404 from 'pages/Error404/Error404';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { ClipLoader } from 'react-spinners';
import classes from './App.module.css';
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
					unmountOnExit
				>
					{(state) => (
						<div ref={nodeRef}>
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
