import React from 'react';
import classes from './FeedbackCompanyForm.module.css';
import FeedBackInput from 'shared/ui/inputs/FeedBackInput/FeedBackInput';
import CheckBox from 'shared/ui/inputs/CheckBox/CheckBox';
import ButtonAction from 'shared/ui/buttons/ButtonAction/ButtonAction';

//TODO добавить валидацию формы
const FeedbackCompanyForm: React.FC<{ className?: string }> = ({
	className,
}) => {
	return (
		<form className={`${classes.form} ${className}`}>
			<FeedBackInput
				className={classes.name}
				id={'name'}
				type={'text'}
				label={'Ваше ім’я'}
			/>
			<FeedBackInput
				className={classes.email}
				id={'email'}
				type={'email'}
				label={'Ел. почта'}
			/>
			<FeedBackInput
				className={classes.textarea}
				type={'textarea'}
				label={'Ваш відгук'}
				id={'textarea'}
			/>

			<CheckBox
				className={classes.checkbox}
				text={'Повідомляти про відповіді по email'}
			/>
			<ButtonAction
				send={true}
				className={classes.button}
				type={'button'}
			>
				Відправити
			</ButtonAction>
		</form>
	);
};

export default FeedbackCompanyForm;
