import React, { useEffect, useRef } from 'react';
import {
	Navigate,
	Outlet,
	useLocation,
	useNavigate,
	useRoutes,
} from 'react-router-dom';
import classes from './FAQ.module.css';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { navLinks } from 'pages/FAQ/services/links';
import FaqNav from 'widgets/FAQNav/FAQNav';
import { FaqRoute } from 'app/routes_path';
import { GeneralRoute } from 'pages/FAQ/services/routes_path';

const FAQ: React.FC = () => {
	const nodeRef = useRef(null);
	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		if (location.pathname === `/${FaqRoute}`) {
			navigate(GeneralRoute, { replace: true });
		}
	}, [location, navigate]);

	return (
		<div className={classes.faq}>
			<h1 className="typography--h1">FAQ</h1>
			<FaqNav navLinks={navLinks} />
			<SwitchTransition>
				<CSSTransition
					appear={true}
					component={false}
					location={location}
					key={location.pathname}
					nodeRef={nodeRef}
					timeout={500}
					classNames={{
						enter: classes.fadeEnter,
						enterActive: classes.fadeEnterActive,
						exit: classes.fadeExit,
						exitActive: classes.fadeExitActive,
					}}
					unmountOnExit
				>
					{(state) => (
						<div ref={nodeRef} className={classes.content}>
							<Outlet />
						</div>
					)}
				</CSSTransition>
			</SwitchTransition>
		</div>
	);
};

export default FAQ;
