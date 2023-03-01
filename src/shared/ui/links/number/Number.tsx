import React from 'react';
import classes from './Number.module.css';
interface propsTypes {
	link: string;
	content: string;
	subContent?: string;
	className?: string;
}
const Number: React.FC<propsTypes> = ({
	link,
	content,
	subContent,
	className,
}) => {
	return (
		<p className={className}>
			<a
				className={`${classes.link} typography--h4`}
				href={link}
				target="_blank"
				rel="noreferrer nofollow"
			>
				{content}
			</a>
			<span className={`${classes.subText} typography--small`}>
				{subContent}
			</span>
		</p>
	);
};

export default Number;
