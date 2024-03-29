import React, { useId, useState } from 'react';
import CardsTop from 'entities/Cards/CardsTop/CardsTop';

import classes from './TopOne.module.css';
//images
import Macbook from 'images/TopOne/macbook.svg';
import IWatch from 'images/TopOne/iwatch.svg';
import IPad from 'images/TopOne/ipad.svg';
import AirPodsMax from 'images/TopOne/airpodsMax.svg';
import MacMini from 'images/TopOne/macmini.svg';
import IMac from 'images/TopOne/imac.svg';
import IWatchConnector from 'images/TopOne/iwatchConnector.svg';
import Iphone from 'images/TopOne/iphone.gif';

const TopOne: React.FC = () => {
	const state = [
		{
			src: Macbook,
			alt: 'зображення Macbook',
			title: 'Macbook Pro 16',
			href: '#',
			price: 'от 4 100 ₴',
		},
		{
			src: IWatch,
			alt: 'зображення IWatch',
			title: 'iWatch',
			href: '#',
			price: '',
		},
		{
			src: IPad,
			alt: 'зображення IPad',
			title: 'iPad Pro',
			href: '#',
			price: '',
		},
		{
			src: AirPodsMax,
			alt: 'зображення AirPods Max',
			title: 'AirPods Max',
			href: '#',
			price: '',
		},
		{
			src: MacMini,
			alt: 'зображення Mac mini',
			title: 'Mac mini M1',
			href: '#',
			price: '',
		},
		{
			src: IMac,
			alt: 'зображення IMac',
			title: 'iMac',
			href: '#',
			price: '',
		},
		{
			src: IWatchConnector,
			alt: 'зображення IWatch connector',
			title: 'iWatch Connector',
			href: '#',
			price: '',
		},
		{
			src: Iphone,
			alt: 'зображення Iphone',
			title: 'Apple iPhone',
			href: '#',
			price: '',
		},
	];

	return (
		<div className={classes.topOne}>
			{state.map((data) => (
				<CardsTop key={useId()} {...data} />
			))}
		</div>
	);
};

export default TopOne;
