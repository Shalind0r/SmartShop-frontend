import React from 'react';
import SubscribeInput from '../../../shared/ui/inputs/Subscibe-Input/Subscribe-Input';
import ButtonAction from '../../../shared/ui/buttons/ButtonAction/ButtonAction';
import classes from './SubscribeForm.module.css';
interface types {
	className?: string;
}
//TODO закончить добавить валидацию и эффекты
const SubscribeForm: React.FC<types> = ({ className }) => {
	return (
		<div className={`${classes.form} ${className}`}>
			<SubscribeInput />
			<ButtonAction className={classes.btn}>Підписатись</ButtonAction>
		</div>
	);
};

export default SubscribeForm;
