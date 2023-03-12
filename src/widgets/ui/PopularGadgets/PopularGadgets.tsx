import React from 'react';
import GadgetCard from 'entities/ui/Cards/GadgetCard/GadgetCard';
// images
import laptop from 'shared/static/images/PopularGadgets/laptop.svg';
import imac from 'shared/static/images/PopularGadgets/imac.svg';
import smartwatch from 'shared/static/images/PopularGadgets/smartwatch.svg';
import piano from 'shared/static/images/PopularGadgets/piano.svg';
import conditioner from 'shared/static/images/PopularGadgets/conditioner.svg';
import classes from './PopularGadgets.module.css';
const PopularGadgets: React.FC = () => {
	return (
		<div className={classes.popularGadgets}>
			<h3 className={'typography--h3'}>Популярні гаджети</h3>
			<div className={classes.wrapper}>
				<GadgetCard
					src={laptop}
					alt={'зображення ноутбука'}
					type={'popular'}
					href={'#'}
					title={'Laptop & Desktop'}
				/>
				<GadgetCard
					src={imac}
					alt={'зображення iMac'}
					type={'popular'}
					href={'#'}
					title={'iMac 2021'}
				/>
				<GadgetCard
					src={smartwatch}
					alt={'зображення годинника'}
					type={'popular'}
					href={'#'}
					title={'Smart Watch'}
				/>
				<GadgetCard
					src={piano}
					alt={'зображення синтезатора'}
					type={'popular'}
					href={'#'}
					title={'Piano Gadgets'}
				/>
				<GadgetCard
					src={conditioner}
					alt={'зображення Air Mini Conditioner'}
					type={'popular'}
					href={'#'}
					title={'Air Mini Conditioner'}
				/>
			</div>
		</div>
	);
};

export default PopularGadgets;
