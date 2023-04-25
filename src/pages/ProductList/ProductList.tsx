import React from 'react';
import { useAppSelector } from 'store/hooks/redux';
import classes from './ProductList.module.css';
import { imagePath } from 'shared/static/imagePath';
const ProductList: React.FC = () => {
	const data = useAppSelector((state) => state.modelsReducer.models);

	return (
		<div>
			<div className={classes.models}>
				{data.map((data) => (
					<div key={data.id} className={classes.models__card}>
						<img src={`${imagePath}/${data.img}`} alt="" />
						<p>{data.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductList;
