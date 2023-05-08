import React from 'react';
import ButtonAction from 'shared/ui/buttons/ButtonAction/ButtonAction';
import SubscribeInput from 'shared/ui/inputs/Subscibe-Input/Subscribe-Input';
import classes from './SubscribeForm.module.css';
import FormPopup from 'entities/FormPopup/FormPopup';
import { useFormValidate } from 'hooks/useFormValidate';
import ValidationError from 'shared/ui/ValidationError/ValidationError';
import { Simulate } from 'react-dom/test-utils';
import invalid = Simulate.invalid;

interface Props {
	className?: string;
}

const SubscribeForm: React.FC<Props> = ({ className }) => {
	const { handleSubmit, errors, register, send, check, setSend } = useFormValidate({
		mode: 'onChange',
	});

	return (
		<div className={className}>
			<form onSubmit={handleSubmit} className={classes.form}>
				<SubscribeInput
					register={register('email', {
						required: `Поле обов'язкове до заповнення`,
						pattern: {
							value: /^(?=.{1,254}$)[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,
							message:
								'Некоректно введений email. Приклад: name@gmail.com ',
						},
						maxLength: {
							value: 25,
							message: 'Максимальна довжина 20 символів',
						},
						minLength: {
							value: 10,
							message: 'Mінімальна довжина 10 символів',
						},
					})}
				/>
				<ButtonAction send={true} type="submit" className={classes.btn}>
					Підписатись
				</ButtonAction>
			</form>
			{errors?.email && (
				<ValidationError error={errors?.email?.message as string} />
			)}
			<FormPopup
				send={send}
				check={check}
				setSend={setSend}
				success={'Запит на розсилку успішно відправлено'}
				unSuccess={'Запит неможливий так як на данний email вже є розсилка'}
			/>
		</div>
	);
};

export default SubscribeForm;
