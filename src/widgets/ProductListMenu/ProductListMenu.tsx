import React, { FC } from 'react';
import SelectedFilters from 'features/SelectedFilters/SelectedFilters';
import ProductGroupFilter from 'features/ProductGroupFilter/ProductGroupFilter';
import classes from './ProductListMenu.module.css';
import { IModels, ISpecification } from 'shared/types/IFilters';
import SpecificationsFilters from 'features/SpecificationsFilters/SpecificationsFilters';
import PriceFilter from 'features/PriceFilter/PriceFilter';
interface IProps {
	models: IModels[] | undefined;
	filter: { models: string[]; specifications: string[] };
	filters: ISpecification[] | undefined;
}
const ProductListMenu: FC<IProps> = (props) => {
	return (
		<div className={classes.productListMenu}>
			<div>
				<SelectedFilters filter={props.filter} />
			</div>
			<div>
				<ProductGroupFilter models={props.models} />
			</div>
			<div>
				<PriceFilter />
			</div>
			<SpecificationsFilters filters={props.filters} />
		</div>
	);
};

export default ProductListMenu;
