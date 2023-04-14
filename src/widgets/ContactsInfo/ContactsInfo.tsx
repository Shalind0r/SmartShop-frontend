import React from 'react';
import NumberImg from 'shared/ui/links/number-img/NumberImg';
import Number from 'shared/ui/links/number/Number';
import ContactsFeedbackForm from 'features/ContacsFeedbackForm/ContactsFeedbackForm';
import classes from './ContactsInfo.module.css';

const ContactsInfo: React.FC = () => {
	return (
		<div className={classes.ContactsInfo}>
			<h4 className={'typography--h4'}>
				Магазин: м. Київ, Кільцева дорога, 122
			</h4>
			<h4 className={'typography--h4'}>
				Графік роботи: Пн-Нд 9:00-21:00
			</h4>
			<NumberImg
				mainLink="tel:+380800306406"
				text="+380 800 306 406"
				firstLink="https://t.me/+380800306406"
				secondLink="href=viber://chat?number=%380800306406"
			/>
			<Number link="tel:+380800306406" content="+380 800 306 406" />
			<Number
				link="tel:+380800306406"
				content="+380 800 306 406"
				subContent="Безкоштовно по країні"
			/>
			<h5 className={'typography--label-2'}>
				ФОРМА ЗВОРОТНОГО ЗВ&apos;ЯЗКУ
			</h5>
			<ContactsFeedbackForm />
		</div>
	);
};

export default ContactsInfo;
