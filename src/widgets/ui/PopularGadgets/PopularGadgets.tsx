import React from 'react';
import GadgetCard from 'entities/ui/Cards/GadgetCard/GadgetCard';
// images
import laptop from 'shared/static/images/PopularGadgets/laptop.svg';
import imac from 'shared/static/images/PopularGadgets/imac.svg';
import smartwatch from 'shared/static/images/PopularGadgets/smartwatch.svg';
import piano from 'shared/static/images/PopularGadgets/piano.svg';
import conditioner from 'shared/static/images/PopularGadgets/conditioner.svg';
import classes from './PopularGadgets.module.css';
const PopularGadgets: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<div className={`${classes.popularGadgets} ${className} container`}>
			<h3 className={'typography--h3'}>Популярні гаджети</h3>
			<div className={classes.wrapper}>
				<GadgetCard
					src={laptop}
					alt={'зображення ноутбука'}
					type={'popular'}
					href={'#'}
					title={'Laptop & Desktop'}
					price={' от 4 100 ₴'}
				/>
				<GadgetCard
					src={imac}
					alt={'зображення iMac'}
					type={'popular'}
					href={'#'}
					title={'iMac 2021'}
					price={' от 4 100 ₴'}
				/>
				<GadgetCard
					src={smartwatch}
					alt={'зображення годинника'}
					type={'popular'}
					href={'#'}
					title={'Smart Watch'}
					price={' от 4 100 ₴'}
				/>
				<GadgetCard
					src={piano}
					alt={'зображення синтезатора'}
					type={'popular'}
					href={'#'}
					title={'Piano Gadgets'}
					price={' от 4 100 ₴'}
				/>
				<GadgetCard
					src={conditioner}
					alt={'зображення Air Mini Conditioner'}
					type={'popular'}
					href={'#'}
					title={'Air Mini Conditioner'}
					price={' от 4 100 ₴'}
				/>
			</div>
		</div>
	);
};

export default PopularGadgets;
