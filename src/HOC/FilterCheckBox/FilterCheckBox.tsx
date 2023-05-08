import React, { useEffect, useState } from 'react';
import { deleteOneFilter, setFilter } from 'store/reducers/ProductsSlice/ProductsSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks/redux';
import { Filter } from 'shared/types/FilterType';

type FilterCheckBoxProps = {
	id?: number;
	text?: string;
	checked?: boolean | undefined;
	handleToggle?: () => void;
	img?: string;
};

const FilterCheckBox = <
	P extends FilterCheckBoxProps & {
		arg: { array: keyof Filter; value: string };
	},
>(
	WrappedComponent: React.ComponentType<P>,
) => {
	const displayName =
		WrappedComponent.displayName || WrappedComponent.name || 'Component';

	const FilterCheckBoxWrapper: React.FC<P> = (props) => {
		const { filter } = useAppSelector((state) => state.productsReducer);
		const { arg } = props;

		const [on, setOn] = useState(false);
		const dispatch = useAppDispatch();

		const { array, value } = arg;
		const index = (filter[array] as string[]).indexOf(value);
		useEffect(() => {
			if (on) {
				index === -1 && dispatch(setFilter({ array, value }));
			} else {
				dispatch(deleteOneFilter({ array, value }));
			}
		}, [on]);
		useEffect(() => {
			index === -1 ? setOn(false) : setOn(true);
		}, [filter]);
		const handleToggle = () => {
			setOn((prevState) => !prevState);
		};

		return <WrappedComponent checked={on} {...props} handleToggle={handleToggle} />;
	};

	FilterCheckBoxWrapper.displayName = `FilterCheckBox(${displayName})`;

	return FilterCheckBoxWrapper;
};

export default FilterCheckBox;
