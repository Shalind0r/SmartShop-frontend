import React, { useRef, useState } from 'react';
import classes from './AccordionItem.module.css';
import { ReactComponent as Arrow } from 'shared/static/images/icons/buttons/accordionArrow.svg';
import { IAccordion } from 'entities/AccordionItem/IAccordion';

const AccordionItem: React.FC<IAccordion> = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [maxHeight, setMaxHeight] = useState('0px');

	const myElementRef = useRef<HTMLParagraphElement>(null);

	const handleAccordionToggle = () => {
		setIsOpen(!isOpen);
		setMaxHeight(isOpen ? '0px' : `${myElementRef.current?.scrollHeight}px`);
	};
	return (
		<div className={classes.accordion}>
			<div onClick={handleAccordionToggle} className={classes.title}>
				<h4 className={'typography--h4'}>{props.title}</h4>
				<Arrow className={isOpen ? classes.button_active : classes.button} />
			</div>
			{props.content && (
				<div
					ref={myElementRef}
					style={{ maxHeight }}
					className={
						isOpen
							? `${classes.accordion__item_active} ${classes.accordion__item} typography--base`
							: ` ${classes.accordion__item} typography--base`
					}
				>
					{props.content && <p>{props.content}</p>}
				</div>
			)}
			{props.children && (
				<div className={classes.item} ref={myElementRef} style={{ maxHeight }}>
					{props.children}
				</div>
			)}
		</div>
	);
};
export default AccordionItem;
