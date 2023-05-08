import React from 'react';
import FeedBackInput from 'shared/ui/inputs/FeedBackInput/FeedBackInput';
import ButtonAction from 'shared/ui/buttons/ButtonAction/ButtonAction';
import classes from './ContactsFeedbackForm.module.css';
import { useFormValidate } from 'hooks/useFormValidate';
import FormPopup from 'entities/FormPopup/FormPopup';

const ContactsFeedbackForm: React.FC = () => {
	const { handleSubmit, errors, register, send, check, setSend } = useFormValidate({
		mode: 'onChange',
	});
	return (
		<form onSubmit={handleSubmit} className={classes.form}>
			<FeedBackInput
				maxLength={10}
				error={errors?.name?.message as string}
				register={register}
				type={'name'}
				label={'Ваше ім’я'}
				id={'name'}
			/>
			<FeedBackInput
				maxLength={20}
				minLength={10}
				register={register}
				error={errors?.email?.message as string}
				type={'email'}
				label={'Ел. почта '}
				id={'email'}
			/>
			<FeedBackInput
				maxLength={250}
				className={classes.textarea}
				error={errors?.textarea?.message as string}
				register={register}
				type={'textarea'}
				label={'Коментар'}
				id={'textarea'}
			/>
			<ButtonAction className={classes.button} type={'submit'} send={true}>
				Відправити
			</ButtonAction>
			<FormPopup
				send={send}
				setSend={setSend}
				check={true}
				success={'Заявка для зворотного связку залишена успішно'}
			/>
		</form>
	);
};

export default ContactsFeedbackForm;
