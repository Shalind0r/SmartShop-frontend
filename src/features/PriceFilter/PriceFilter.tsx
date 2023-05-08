import { useHandleEvents } from './handleEvents';
import React, { useRef } from 'react';
import classes from './PriceFilter.module.css';
import ButtonAction from 'shared/ui/buttons/ButtonAction/ButtonAction';

const PriceFilter = () => {
	const minPrice = useRef<HTMLInputElement>(null);
	const maxPrice = useRef<HTMLInputElement>(null);

	const { updateMinPrice, updateMaxPrice, handleClick, handleValue, handlePressEnter } =
		useHandleEvents();

	const inputParams = {
		maxLength: 7,
		type: 'number',
	};
	return (
		<div className={classes.priceFilter}>
			<h4 className={'typography--h4'}>Ціна, ₴</h4>
			<form className={classes.form}>
				<input
					onChange={() => handleValue(minPrice, updateMinPrice)}
					onKeyDown={(e) => handlePressEnter(e, minPrice, updateMinPrice)}
					ref={minPrice}
					{...inputParams}
				/>
				<hr />
				<input
					onChange={() => handleValue(maxPrice, updateMaxPrice)}
					onKeyDown={(e) => handlePressEnter(e, maxPrice, updateMaxPrice)}
					ref={maxPrice}
					{...inputParams}
				/>
				<ButtonAction
					onClick={() => handleClick({ minPrice, maxPrice })}
					type={'button'}
				>
					ок
				</ButtonAction>
			</form>
		</div>
	);
};

export default PriceFilter;
