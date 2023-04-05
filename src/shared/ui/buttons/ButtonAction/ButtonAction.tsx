import React from 'react';
import classes from './ButtonAction.module.css';
import { NavLink } from 'react-router-dom';

interface IProps {
	children: string;
	className?: string;
	type: string;
	link?: string;
	to?: string;
	onClick?: () => void;
	send?: boolean;
}

const ButtonAction: React.FC<IProps> = (props) => {
	return props.type === 'button' ? (
		<button
			type={props.send === true ? 'submit' : 'button'}
			onClick={props.onClick}
			className={`${classes.button} ${props.className} typography--label`}
		>
			{props.children}
		</button>
	) : props.type === 'link' && props.to ? (
		<NavLink
			to={props.to}
			className={`${classes.link} ${props.className} typography--label`}
		>
			{props.children}
		</NavLink>
	) : null;
};

export default ButtonAction;
