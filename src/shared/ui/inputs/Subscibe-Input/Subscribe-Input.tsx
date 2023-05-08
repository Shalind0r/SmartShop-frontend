import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import classes from './Subscribe-Input.module.css';
interface IProps {
	className?: string;
	register?: UseFormRegisterReturn<'email'>;
}
const SubscribeInput: React.FC<IProps> = ({ className, register }) => {
	return (
		<input
			maxLength={20}
			className={`${classes.input} ${className} input typography--base `}
			placeholder="Мій e-mail"
			{...register}
		/>
	);
};

export default SubscribeInput;
