import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import classes from './FeedBackInput.module.css';

import ValidationError from 'shared/ui/ValidationError/ValidationError';

interface IProps {
	type: string;
	label: string;
	id: string;
	className?: string;
	register?: UseFormRegister<FieldValues>;
	error?: string;
	maxLength: number;
	minLength?: number;
}

const FeedBackInput: React.FC<IProps> = (props) => {
	return (
		<fieldset className={` ${props.className} ${classes.input}`}>
			<label htmlFor={props.id} className={'typography--small'}>
				{props.label}
			</label>
			{props.type === 'textarea' ? (
				<textarea
					{...props?.register?.('textarea', {
						required: `Поле обов'язкове до заповнення`,
						pattern: {
							value: /^[А-Яа-яЁёІіЇїЄєҐґ\s]+$/,
							message: 'Поле може містити тільки кирилицю',
						},
						maxLength: {
							value: props.maxLength,
							message: `Максимальна довжина ${props.maxLength} символів`,
						},
					})}
					id={props.id}
					className={'typography--base input'}
					maxLength={props.maxLength}
				/>
			) : (
				<input
					{...(props.type === 'email'
						? props?.register?.('email', {
								required: `Поле обов'язкове до заповнення`,
								pattern: {
									value: /^(?=.{1,254}$)[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,
									message:
										'Некоректно введений email. Приклад: name@gmail.com ',
								},
								maxLength: {
									value: props.maxLength,
									message: `Максимальна довжина ${props.maxLength} символів`,
								},
								minLength: {
									value: props.minLength as number,
									message: `Mінімальна довжина ${props.minLength} символів`,
								},
						  })
						: props.register &&
						  props.register('name', {
								required: `Поле обов'язкове до заповнення`,
								pattern: {
									value: /^[А-Яа-яЁёІіЇїЄєҐґ\s]+$/,
									message: 'Поле може містити тільки кирилицю',
								},
								maxLength: {
									value: props.maxLength,
									message: `Максимальна довжина ${props.maxLength} символів`,
								},
						  }))}
					id={props.id}
					className={'typography--base input'}
					type={'text'}
					maxLength={props.maxLength}
				/>
			)}
			{props.error && <ValidationError error={props.error as string} />}
		</fieldset>
	);
};

export default FeedBackInput;
