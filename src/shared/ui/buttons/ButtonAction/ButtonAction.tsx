import React from 'react';
import classes from './ButtonAction.module.css';

interface props {
	children: string;
	className?: string;
	type: string;
	link?: string;
}

const ButtonAction: React.FC<props> = ({ children, className, type, link }) => {
	const buttonType = () => {
		switch (type) {
			case 'button':
				return (
					<button
						className={`${classes.button} ${className} typography--label`}
					>
						{children}
					</button>
				);
				break;
			case 'link':
				return (
					<a
						href={link}
						className={`${classes.link} ${className} typography--label`}
					>
						{children}
					</a>
				);
				break;
			default:
				alert(
					"Обязательно нужно указать type:'button или link' в компоненте ButtonAction ",
				);
		}
	};

	return <React.Fragment>{buttonType()}</React.Fragment>;
};

export default ButtonAction;
