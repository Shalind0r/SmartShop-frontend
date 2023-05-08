import React from 'react';
import { setMaxPrice, setMinPrice } from 'store/reducers/ProductsSlice/ProductsSlice';
import { useAppDispatch } from 'store/hooks/redux';

type PriceRef = React.RefObject<HTMLInputElement>;
type handleClick = { minPrice: PriceRef; maxPrice: PriceRef };
type fn = (arg: PriceRef) => void;
type press = React.KeyboardEvent<HTMLInputElement>;

export const useHandleEvents = () => {
	const dispatch = useAppDispatch();

	const updateMinPrice = (minPrice: PriceRef) => {
		dispatch(setMinPrice(minPrice.current?.value));
	};

	const updateMaxPrice = (maxPrice: PriceRef) => {
		dispatch(setMaxPrice(maxPrice.current?.value));
	};

	const handleClick = ({ minPrice, maxPrice }: handleClick) => {
		updateMaxPrice(maxPrice);
		updateMinPrice(minPrice);
	};

	const handleValue = (price: PriceRef, fn: fn) => {
		price.current?.value === '' && fn(price);
	};

	const handlePressEnter = (press: press, price: PriceRef, fn: fn) => {
		press.key === 'ArrowUp' || (press.key === 'ArrowDown' && press.preventDefault());
		press.key === 'Enter' && fn(price);
	};

	return {
		updateMinPrice,
		updateMaxPrice,
		handleClick,
		handleValue,
		handlePressEnter,
	};
};
