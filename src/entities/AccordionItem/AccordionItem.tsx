import React, { useRef, useState } from 'react';
import classes from './AccordionItem.module.css';
import { ReactComponent as Arrow } from 'shared/static/images/icons/buttons/accordionArrow.svg';
import { IAccordion } from 'entities/AccordionItem/IAccordion';
import {
	AnimatedProps,
	SpringValue,
	useSpring,
	animated,
	config,
} from 'react-spring';

const AccordionItem: React.FC<IAccordion> = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [maxHeight, setMaxHeight] = useState('0px');

	const myElementRef = useRef<HTMLParagraphElement>(null);

	const handleAccordionToggle = () => {
		setIsOpen(!isOpen);
		setMaxHeight(
			isOpen ? '0px' : `${myElementRef.current?.scrollHeight}px`,
		);
	};
	const effect = useSpring({
		height: isOpen ? maxHeight : '0',
	});
	return (
		<div className={classes.accordion}>
			<div onClick={handleAccordionToggle} className={classes.title}>
				<h4 className={'typography--h4'}>{props.title}</h4>
				<Arrow
					className={isOpen ? classes.button_active : classes.button}
				/>
			</div>
			<animated.div
				ref={myElementRef}
				style={effect}
				className={
					isOpen
						? `${classes.accordion__item_active} ${classes.accordion__item} typography--base`
						: ` ${classes.accordion__item} typography--base`
				}
			>
				<p>{props.content}</p>
			</animated.div>
		</div>
	);
};

export default AccordionItem;
