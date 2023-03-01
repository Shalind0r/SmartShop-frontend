import React from 'react';
import classes from './Subscribe-Input.module.css';
interface types {
	className?: string;
}
const SubscribeInput: React.FC<types> = ({ className }) => {
	return (
		<input
			className={`${classes.input} ${className} typography--base `}
			placeholder="Мій e-mail"
			type="email"
		/>
	);
};

export default SubscribeInput;
