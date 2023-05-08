import React from 'react';
import classes from './FeedbackCompanyForm.module.css';
import FeedBackInput from 'shared/ui/inputs/FeedBackInput/FeedBackInput';
import CheckBox from 'shared/ui/inputs/CheckBox/CheckBox';
import ButtonAction from 'shared/ui/buttons/ButtonAction/ButtonAction';
import { useFormValidate } from 'hooks/useFormValidate';
import FormPopup from 'entities/FormPopup/FormPopup';

const FeedbackCompanyForm: React.FC<{ className?: string }> = ({ className }) => {
	const { errors, send, setSend, register, handleSubmit } = useFormValidate({
		mode: 'onChange',
	});
	return (
		<form onSubmit={handleSubmit} className={`${classes.form} ${className}`}>
			<FeedBackInput
				maxLength={10}
				error={errors?.name?.message as string}
				register={register}
				className={classes.name}
				id={'name'}
				type={'text'}
				label={'Ваше ім’я'}
			/>
			<FeedBackInput
				maxLength={20}
				minLength={10}
				error={errors?.email?.message as string}
				register={register}
				className={classes.email}
				id={'email'}
				type={'email'}
				label={'Ел. почта'}
			/>
			<FeedBackInput
				maxLength={350}
				error={errors?.textarea?.message as string}
				register={register}
				className={classes.textarea}
				type={'textarea'}
				label={'Ваш відгук'}
				id={'textarea'}
			/>

			<CheckBox
				className={classes.checkbox}
				text={'Повідомляти про відповіді по email'}
			/>
			<ButtonAction send={true} className={classes.button} type={'button'}>
				Відправити
			</ButtonAction>
			<FormPopup
				send={send}
				setSend={setSend}
				check={true}
				success={'Відгуг успішно відправлено'}
			/>
		</form>
	);
};

export default FeedbackCompanyForm;
