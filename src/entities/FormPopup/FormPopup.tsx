import React, { FC, useRef } from 'react';
import classes from './FormPopup.module.css';
import { CSSTransition } from 'react-transition-group';
import ButtonAction from 'shared/ui/buttons/ButtonAction/ButtonAction';

interface IProps {
	send: boolean;
	check?: boolean;
	setSend: (arg: boolean) => void;
	success: string;
	unSuccess?: string;
}

const FormPopup: FC<IProps> = ({ send, check, setSend, success, unSuccess }) => {
	const nodeRef = useRef(null);
	return (
		<CSSTransition
			nodeRef={nodeRef}
			in={send}
			timeout={500}
			classNames={{
				enter: classes.form__PopupEnter,
				enterActive: classes.form__PopupEnterActive,
				exit: classes.form__PopupExit,
				exitActive: classes.form__PopupExitActive,
			}}
			unmountOnExit={true}
		>
			<div ref={nodeRef} className={classes.formPopup}>
				<div
					className={
						!check
							? `${classes.formPopup__wrapper_error} ${classes.formPopup__wrapper}`
							: classes.formPopup__wrapper
					}
				>
					<p className={'typography--label-2'}>{check ? success : unSuccess}</p>
					<ButtonAction type={'button'} onClick={() => setSend(false)}>
						Готово
					</ButtonAction>
				</div>
			</div>
		</CSSTransition>
	);
};

export default FormPopup;
