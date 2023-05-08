import React, { FC } from 'react';
import classes from './ProductGroupFilter.module.css';
import AccordionItem from 'entities/AccordionItem/AccordionItem';
import FilterCheckBox from '../../HOC/FilterCheckBox/FilterCheckBox';
import { IModels } from 'shared/types/IFilters';

const FilteredLi = FilterCheckBox(({ text, handleToggle, checked }) => (
	<li
		onClick={handleToggle}
		className={checked ? `${classes.active} typography--base` : 'typography--base'}
	>
		{text}
	</li>
));
const ProductGroupFilter: FC<{ models: IModels[] | undefined }> = ({ models }) => {
	return (
		<AccordionItem title={`Група товарів`}>
			<ul className={classes.list}>
				{models &&
					models.map((data) => (
						<FilteredLi
							key={data.id}
							text={data.model}
							id={data.id}
							arg={{
								array: 'models',
								value: data.model,
							}}
						/>
					))}
			</ul>
		</AccordionItem>
	);
};

export default ProductGroupFilter;
