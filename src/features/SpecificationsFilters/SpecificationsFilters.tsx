import React, { FC } from 'react';
import classes from './SpecificationsFilters.module.css';
import AccordionItem from 'entities/AccordionItem/AccordionItem';
import { ISpecification, ISpecifications } from 'shared/types/IFilters';
import FilterCheckBox from '../../HOC/FilterCheckBox/FilterCheckBox';
import CheckBox from 'shared/ui/inputs/CheckBox/CheckBox';
const EnhancedCheckBox = FilterCheckBox(CheckBox);
const SpecificationsFilters: FC<{ filters: ISpecification[] | undefined }> = ({
	filters,
}) => {
	return (
		<div>
			{filters &&
				filters.map((data) => (
					<div key={data.id} className={classes.wrapper}>
						<AccordionItem title={data.name}>
							<ul className={classes.list}>
								{data.specifications.map((data: ISpecifications) => (
									<li key={data.id}>
										<EnhancedCheckBox
											text={data.specification}
											id={data.id}
											arg={{
												array: 'specifications',
												value: data.specification,
											}}
										/>
									</li>
								))}
							</ul>
						</AccordionItem>
					</div>
				))}
		</div>
	);
};

export default SpecificationsFilters;
