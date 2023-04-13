import React, { useEffect, useRef, useState } from 'react';
import classes from './Accordions.module.css';
import AccordionItem from 'entities/AccordionItem/AccordionItem';
import { ReactComponent as Update } from 'shared/static/images/icons/buttons/update.svg';
import { IAccordion } from 'entities/AccordionItem/IAccordion';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Accordions: React.FC<{ data: IAccordion[] }> = ({ data }) => {
	const buttonRef = useRef(null);
	const listRef = useRef(null);
	const [count, setCount] = useState(10);
	const [loading, setLoading] = useState(false);
	const [hideButton, setHideButton] = useState(false);

	useEffect(() => {
		setCount(10);
	}, [data]);
	const handleClick = () => {
		setCount((prevState) => prevState + 1);
		if (data.length >= 10) {
			setLoading(true);
			setTimeout(() => {
				setLoading(false);
			}, 500);
			count + 1 === data.length &&
				setTimeout(() => setHideButton(true), 500);
		}
	};

	return (
		<div className={classes.accordions}>
			<ol className={`${classes.list} typography--h4`}>
				<TransitionGroup component={null}>
					{data.slice(0, count).map((data, index) => (
						<CSSTransition
							nodeRef={listRef}
							key={index}
							timeout={500}
							classNames={{
								enter: classes.itemEnter,
								enterActive: classes.itemEnterActive,
								exit: classes.itemExit,
								exitActive: classes.itemExitActive,
							}}
						>
							<li ref={listRef} className={classes.list__item}>
								<AccordionItem {...data} />
							</li>
						</CSSTransition>
					))}
				</TransitionGroup>
			</ol>

			{data.length > 10 && (
				<CSSTransition
					nodeRef={buttonRef}
					in={!hideButton}
					timeout={500}
					classNames={{
						exit: classes.buttonExit,
						exitActive: classes.buttonExitActive,
					}}
					unmountOnExit={true}
				>
					<span
						ref={buttonRef}
						onClick={handleClick}
						className={'typography--label'}
					>
						<Update className={loading ? classes.loading : ''} />
						Показати ще
					</span>
				</CSSTransition>
			)}
		</div>
	);
};

export default Accordions;
