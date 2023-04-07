import React from 'react';
import AdvancesItem from 'entities/AdvancesItem/AdvancesItem';
import classes from './AdvancesSecond.module.css';
//icons
import { ReactComponent as LabelIcon } from 'icons/Advances2/label.svg';
import { ReactComponent as MoneyIcon } from 'icons/Advances2/money.svg';
import { ReactComponent as TagIcon } from 'icons/Advances2/tag.svg';
import { ReactComponent as CreditCardIcon } from 'icons/Advances2/creditCard.svg';

const AdvancesSecond: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<div className={`${classes.advancesSecond} ${className}`}>
			<div className={`${classes.wrapper} container`}>
				<AdvancesItem
					type={'second'}
					icon={<LabelIcon />}
					title={'Надійність понад усе'}
					content={
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed ' +
						'imperdiet nibh lectus feugiat nunc sem.'
					}
				/>
				<AdvancesItem
					type={'second'}
					icon={<MoneyIcon />}
					title={'Надійність понад усе'}
					content={
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed ' +
						'imperdiet nibh lectus feugiat nunc sem.'
					}
				/>
				<AdvancesItem
					type={'second'}
					icon={<TagIcon />}
					title={'Надійність понад усе'}
					content={
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed ' +
						'imperdiet nibh lectus feugiat nunc sem.'
					}
				/>
				<AdvancesItem
					type={'second'}
					icon={<CreditCardIcon />}
					title={'Надійність понад усе'}
					content={
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed ' +
						'imperdiet nibh lectus feugiat nunc sem.'
					}
				/>
			</div>
		</div>
	);
};

export default AdvancesSecond;
