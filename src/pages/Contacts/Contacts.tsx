import React from 'react';
import classes from './Contacts.module.css';

import ContactsInfo from 'widgets/ContactsInfo/ContactsInfo';
// TODO сделать потом нормальную гугл карту
const Contacts: React.FC = () => {
	return (
		<div className={classes.contacts}>
			<h1 className={'typography--h1'}>Контакти</h1>
			<div className={classes.content}>
				<ContactsInfo />
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20330.657179376616!2d30.326294995072733!3d50.43491363235552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cb7e9cf73833%3A0x6d5693ae338298fe!2z0JrRltC70YzRhtC10LLQsCDQtNC-0YDQvtCz0LAsIDEyMiwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1681485678865!5m2!1sru!2sua"
					width="850px"
					height="752px"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	);
};

export default Contacts;
