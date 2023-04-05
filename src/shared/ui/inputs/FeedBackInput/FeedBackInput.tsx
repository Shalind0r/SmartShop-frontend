import React from 'react';
import classes from './FeedBackInput.module.css';
interface IProps {
	type: string;
	label: string;
	id: string;
	className?: string;
}
const FeedBackInput: React.FC<IProps> = (props) => {
	return (
		<fieldset className={` ${props.className} ${classes.input}`}>
			<label htmlFor={props.id} className={'typography--small'}>
				{props.label}
			</label>
			{props.type === 'textarea' ? (
				<textarea
					id={props.id}
					className={'typography--base'}
					maxLength={300}
				/>
			) : (
				<input
					id={props.id}
					className={'typography--base'}
					type={props.type}
					maxLength={50}
				/>
			)}
		</fieldset>
	);
};

export default FeedBackInput;
