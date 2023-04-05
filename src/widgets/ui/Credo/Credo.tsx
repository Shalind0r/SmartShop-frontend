import React from 'react';
import classes from './Credo.module.css';
import AdvancesItem from 'entities/ui/AdvancesItem/AdvancesItem';

import { ReactComponent as LabelIcon } from 'icons/Advances2/label.svg';
import { ReactComponent as MoneyIcon } from 'icons/Advances2/money.svg';
import { ReactComponent as TagIcon } from 'icons/Advances2/tag.svg';
const Credo: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<div className={`${classes.credo} ${className}`}>
			<div className={classes.wrapper}>
				<h2 className={'typography--extra-large'}>
					Наше улюблене кредо <br /> - зручний та надійний сервіс
				</h2>
				<div className={classes.content}>
					<AdvancesItem
						icon={<LabelIcon />}
						title={'Надійність понад усе'}
						content={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque ' +
							'sed imperdiet nibh lectus feugiat nunc sem.'
						}
						type={'second'}
					/>
					<AdvancesItem
						icon={<MoneyIcon />}
						title={'Зручний сервіс'}
						content={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque ' +
							'sed imperdiet nibh lectus feugiat nunc sem.'
						}
						type={'second'}
					/>
					<AdvancesItem
						icon={<TagIcon />}
						title={'Надійність понад усе'}
						content={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque ' +
							'sed imperdiet nibh lectus feugiat nunc sem.'
						}
						type={'second'}
					/>
				</div>
			</div>
		</div>
	);
};

export default Credo;
