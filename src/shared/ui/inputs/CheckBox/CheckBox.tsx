import React from 'react';
import classes from './CheckBox.module.css';
import { ReactComponent as Check } from 'shared/static/images/icons/buttons/checkbox.svg';

const CheckBox: React.FC<{ className?: string; text?: string }> = ({
	className,
	text,
}) => {
	return (
		<label
			htmlFor={'checkbox'}
			className={`${className} ${classes.checkbox}`}
		>
			<input id={'checkbox'} type={'checkbox'} />
			<span className={classes.check}>
				<Check />
			</span>
			<span className={'typography--base'}>{text}</span>
		</label>
	);
};

export default CheckBox;
