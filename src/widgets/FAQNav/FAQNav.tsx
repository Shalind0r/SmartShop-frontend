import React from 'react';
import classes from './FAQNav.module.css';
import { NavLink } from 'react-router-dom';

interface IProps {
	navLinks: { route: string; title: string }[];
}

const FaqNav: React.FC<IProps> = ({ navLinks }) => {
	return (
		<div className={classes.nav}>
			{navLinks.map(({ route, title }) => (
				<NavLink
					key={route}
					to={route}
					className={({ isActive }) =>
						isActive
							? `${classes.link_active} ${classes.link} typography--label-2`
							: `${classes.link} typography--label-2`
					}
				>
					{title}
				</NavLink>
			))}
		</div>
	);
};

export default FaqNav;
