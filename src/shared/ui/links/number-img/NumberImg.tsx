import React from 'react';
import { ReactComponent as TelegramLogo } from 'icons/social/telegram.svg';
import { ReactComponent as ViberLogo } from 'icons/social/viber.svg';
import classes from './NumberImg.module.css';
interface types {
	firstLink: string;
	secondLink: string;
	mainLink: string;
	text: string;
	className?: string;
}
const NumberImg: React.FC<types> = ({
	firstLink,
	secondLink,
	mainLink,
	text,
	className,
}) => {
	return (
		<p className={className}>
			<a
				className={`${classes.text} ${className} typography--h4`}
				href={mainLink}
				target="_blank"
				rel="noreferrer  nofollow"
			>
				{text}
			</a>
			<span>
				<a
					href={firstLink}
					target="_blank"
					className={'link'}
					rel="noreferrer nofollow "
				>
					<TelegramLogo className={classes.telegramIcon} />
				</a>
				<a
					href={secondLink}
					className={'link'}
					target="_blank"
					rel="noreferrer nofollow "
				>
					<ViberLogo className={classes.viberIcon} />
				</a>
			</span>
		</p>
	);
};

export default NumberImg;
