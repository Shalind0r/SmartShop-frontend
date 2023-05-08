import React, { FC } from 'react';
import classes from './FilteredImg.module.css';
import FilterCheckBox from '../../HOC/FilterCheckBox/FilterCheckBox';
import { imagePath } from 'shared/static/imagePath';
import { IModels } from 'shared/types/IFilters';

const ImageCard = FilterCheckBox(({ img, text, handleToggle, checked }) => (
	<div
		onClick={handleToggle}
		className={
			checked ? `${classes.models__card} ${classes.active}` : classes.models__card
		}
	>
		<img src={`${imagePath}/${img}`} alt="" />
		<p className={'typography--small'}>{text}</p>
	</div>
));

const FilteredImg: FC<{ models: IModels[] | undefined }> = ({ models }) => {
	return (
		<div className={classes.models}>
			{models &&
				models.map((data) => (
					<ImageCard
						key={data.id}
						img={data.img}
						text={data.model}
						id={data.id}
						arg={{
							array: 'models',
							value: data.model,
						}}
					/>
				))}
		</div>
	);
};

export default FilteredImg;
