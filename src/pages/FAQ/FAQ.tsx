import React, { useEffect, useRef } from 'react';
import {
	Navigate,
	useLocation,
	useNavigate,
	useRoutes,
} from 'react-router-dom';
import classes from './FAQ.module.css';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { navLinks, routes } from 'pages/FAQ/services/routes';
import FaqNav from 'widgets/FAQNav/FAQNav';
import { FaqRoute } from 'app/routes_path';

const FAQ: React.FC = () => {
	const element = useRoutes(routes);
	const nodeRef = useRef(null);
	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		if (location.pathname === `/${FaqRoute}`) {
			navigate(routes[0].path, { replace: true });
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
							{element}
						</div>
					)}
				</CSSTransition>
			</SwitchTransition>
		</div>
	);
};

export default FAQ;
