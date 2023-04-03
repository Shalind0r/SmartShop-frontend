import React from 'react';
import { ReactComponent as Arrow } from 'shared/static/images/icons/buttons/arrow.svg';
import classes from './LinkWithArrow.module.css';
interface propTypes {
	content: string;
	href: string;
}
const LinkWithArrow: React.FC<propTypes> = ({ href, content }) => {
	return (
		<a href={href} className={`typography--label ${classes.link}  link`}>
			{content} <Arrow />
		</a>
	);
};

export default LinkWithArrow;
