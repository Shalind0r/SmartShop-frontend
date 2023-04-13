import React, { useRef } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import classes from './FAQ.module.css';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { navLinks, routes } from 'pages/FAQ/services/routes';

import FaqNav from 'widgets/FAQNav/FAQNav';

const FAQ: React.FC = () => {
	const location = useLocation();
	const element = useRoutes(routes);
	const nodeRef = useRef(null);
	return (
		<div className={classes.faq}>
			<h1 className="typography--h1">FAQ</h1>
			<FaqNav navLinks={navLinks} />
			<SwitchTransition>
				<CSSTransition
					nodeRef={nodeRef}
					key={location.pathname}
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
