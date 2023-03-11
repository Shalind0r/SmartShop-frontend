import React, { Key, useState } from 'react';
import classes from './FooterNav.module.css';
import uuid from 'react-uuid';
import { ReactComponent as InstagramLogo } from 'icons/social/instagram.svg';

interface state {
	content: string;
	href: string;
	id: Key;
}
interface types {
	className?: string;
}

const FooterNav: React.FC<types> = ({ className }) => {
	const [navItem] = useState({
		catalog: [
			{ content: 'Акції та знижки', href: ' ', id: uuid() },
			{ content: 'Побутова техніка', href: ' ', id: uuid() },
			{ content: 'Електроніка', href: ' ', id: uuid() },
			{ content: "Ком'ютерна техніка", href: ' ', id: uuid() },
			{ content: 'Меблі', href: ' ', id: uuid() },
			{ content: 'Дрібна побутова техніка', href: ' ', id: uuid() },
			{ content: 'Товари для дітей', href: ' ', id: uuid() },
			{ content: 'Будівництво та сад', href: ' ', id: uuid() },
			{ content: 'Перейти до каталогу', href: ' ', id: uuid() },
		],
		company: [
			{ content: 'Про компанію', href: ' ', id: uuid() },
			{ content: 'Блог', href: ' ', id: uuid() },
			{ content: 'Турбота про клієнтів', href: ' ', id: uuid() },
			{ content: 'Наша команда', href: ' ', id: uuid() },
			{ content: 'Контакти', href: ' ', id: uuid() },
		],
		support: [
			{ content: 'Доставка і оплата', href: ' ', id: uuid() },
			{ content: 'Умови повернення та обміну', href: ' ', id: uuid() },
			{ content: 'Кредит в інтернет-магазині', href: ' ', id: uuid() },
			{ content: 'Постачальникам', href: ' ', id: uuid() },
			{ content: 'FAQ', href: ' ', id: uuid() },
		],
	});
	const buildNav = (array: state[]) => {
		return array.map((item) => (
			<div className={classes.footerNav__item} key={item.id}>
				<a className="typography--base-extended" href={item.href}>
					{item.content}
				</a>
			</div>
		));
	};
	return (
		<div className={`${classes.footerNav} ${className}`}>
			<div className={classes.catalog}>
				<h4 className={`${classes.footerNav__title} typography--h4 `}>Каталог</h4>
				{buildNav(navItem.catalog)}
			</div>
			<div className={classes.company}>
				<h4 className={`${classes.footerNav__title} typography--h4 `}>
					Компанія
				</h4>
				{buildNav(navItem.company)}
				<div className={classes.footerNav__item}>
					<a href="#" className="typography--small">
						<span>
							<InstagramLogo />
						</span>
						Ми в соц мережах
					</a>
				</div>
			</div>
			<div className={classes.support}>
				<h4 className={`${classes.footerNav__title} typography--h4 `}>
					Підтримка
				</h4>
				{buildNav(navItem.support)}
			</div>
		</div>
	);
};

export default FooterNav;
