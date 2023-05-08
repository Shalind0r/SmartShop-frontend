import React from 'react';
import classes from './CheckBox.module.css';
import { ReactComponent as Check } from 'shared/static/images/icons/buttons/checkbox.svg';
import { UseFormRegisterReturn } from 'react-hook-form';
interface IProps {
	className?: string;
	text?: string;
	id?: number;
	handleToggle?: () => void;
	checked?: boolean;
	on?: boolean;
	register?: UseFormRegisterReturn<string>;
}
const CheckBox: React.FC<IProps> = (props) => {
	return (
		<label
			htmlFor={props.id ? `${props.id}` : 'checkbox'}
			className={`${props.className} ${classes.checkbox}`}
		>
			<input
				{...props.register}
				checked={props.checked}
				onChange={props.handleToggle}
				id={props.id ? `${props.id}` : 'checkbox'}
				type={'checkbox'}
			/>
			<span className={classes.check}>
				<Check />
			</span>
			<span
				className={
					props.id ? `${classes.item} typography--base` : ' typography--base'
				}
			>
				{props.text}
			</span>
		</label>
	);
};

export default CheckBox;
