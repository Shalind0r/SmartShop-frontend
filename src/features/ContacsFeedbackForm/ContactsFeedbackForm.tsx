import React from 'react';
import FeedBackInput from 'shared/ui/inputs/FeedBackInput/FeedBackInput';
import ButtonAction from 'shared/ui/buttons/ButtonAction/ButtonAction';
import classes from './ContactsFeedbackForm.module.css';
//TODO добавить валидацию
const ContactsFeedbackForm: React.FC = () => {
	return (
		<form className={classes.form}>
			<FeedBackInput type={'name'} label={'Ваше ім’я'} id={'name'} />
			<FeedBackInput type={'email'} label={'Ел. почта '} id={'email'} />
			<FeedBackInput
				className={classes.textarea}
				type={'textarea'}
				label={'Коментар'}
				id={'textarea'}
			/>
			<ButtonAction
				className={classes.button}
				type={'button'}
				send={true}
			>
				Відправити
			</ButtonAction>
		</form>
	);
};

export default ContactsFeedbackForm;
