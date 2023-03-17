import React from 'react';
import SubscribeForm from 'features/ui/Subscribe-Form/SubscribeForm';
import classes from './Footer.module.css';
import FooterNav from 'entities/ui/Navigation/footerNav/FooterNav';
import Communication from 'entities/ui/Communication/Communication';
import Number from 'shared/ui/links/number/Number';
import NumberImg from 'shared/ui/links/number-img/NumberImg';
import { ReactComponent as MasterCardLogo } from 'icons/payments/mastercard.svg';
import { ReactComponent as VisaLogo } from 'icons/payments/visa.svg';
import { ReactComponent as PayPalLogo } from 'icons/payments/paypal.svg';
import { ReactComponent as WezomLogo } from 'icons/wezom.svg';

const Footer: React.FC = () => {
	return (
		<footer className={classes.footer}>
			<div className={`container`}>
				<div className={classes.footer__container}>
					<div className={classes.footer__leftSide}>
						<h4 className={`${classes.footer__leftTitle} typography--h4`}>
							Підписка на розсилку новин/статей
						</h4>
						<p className={`${classes.label} typography--base-extended`}>
							Підпишіться на останні оновлення та дізнавайтеся про новинки
							та спеціальні пропозиції першими
						</p>
						<SubscribeForm className={classes.footer__form} />
						<Communication className={classes.footer__communication}>
							<NumberImg
								mainLink="tel:+380800306406"
								text="+380 800 306 406"
								firstLink="https://t.me/+380800306406"
								secondLink="href=viber://chat?number=%380800306406"
							/>
							<Number
								link="tel:+380800306406"
								content="+380 800 306 406"
								subContent="Безкоштовно по країні"
							/>
						</Communication>
						<p className={`${classes.copyright}typography typography--small`}>
							<span className={classes.copyright__item}>&copy;</span>
							2022 - Надійний інтернет супермаркет «Smartshop.com»
						</p>
					</div>
					<hr />
					<div className={classes.footer__rightSide}>
						<FooterNav />
						<div
							className={`${classes.footer__rightSideSub} typography--small`}
						>
							<div className={classes.payments}>
								<div className={classes.payments__system}>
									<MasterCardLogo className={classes.payments__item} />
									<VisaLogo className={classes.payments__item} />
									<PayPalLogo className={classes.payments__item} />
								</div>
								<span
									className={`${classes.payments__description} typography--small`}
								>
									Приймаємо до оплати
								</span>
							</div>
							<div className={`${classes.siteDeveloper}`}>
								<span>Розробка e-commerce — Wezom</span>
								<WezomLogo />
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
