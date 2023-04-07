import React, { useEffect, useId, useState } from 'react';
import classes from './News.module.css';
import CardNews from 'entities/Cards/CardNews/CardNews';
import CardSlider from 'entities/CardSlider/CardSlider';
import { useInView } from 'react-intersection-observer';
//images
import tradeIn from 'images/news/tradeIn.svg';
import redesign from 'images/news/redesign.svg';
import m1x from 'images/news/m1x.svg';
import fiveG from 'images/news/5g.svg';
import appleTv from 'images/news/appleTv.svg';
import cardNews from 'entities/Cards/CardNews/CardNews';

const News: React.FC = () => {
	const state = [
		{
			href: '#',
			src: tradeIn,
			title: 'Додаткова вигода при покупці iPhone 12 та iPhone 12 mini',
			content:
				'При сдаче любого устройства в ' +
				'трейд-ин получите дополнительную ' +
				'выгоду от 7 000 на покупку iPhone 12 и ' +
				'iPhone 12 mini.',
			date: '14 червня 2021',
			alt: 'зображення iPhone 12',
		},
		{
			href: '#',
			src: redesign,
			alt: 'зображення iPhone 12',
			title: 'Змінюємо ваш iPhone 12 - з редизайном інтерфейсу Material You',
			content:
				'З 6 квітня до 26 червня включно при здачі будь-якого пристрою в трейд-ін отримаєте додаткову вигоду.',
			date: '14 червня 2021',
		},
		{
			href: '#',
			alt: 'зображення iPhone 12',
			src: m1x,
			title: 'Характеристики дуже швидкої SoC Apple M1X утекли до анонсу',
			content:
				'З 6 квітня до 26 червня включно при здачі будь-якого пристрою в трейд-ін отримаєте додаткову вигоду.',
			date: '14 червня 2021',
		},
		{
			href: '#',
			src: fiveG,
			alt: 'зображення iPhone 12',
			title: 'Змінюємо ваш iPhone 12 - з редизайном інтерфейсу Material You',
			content:
				'З 6 квітня до 26 червня включно при здачі будь-якого пристрою в трейд-ін отримаєте додаткову вигоду.',
			date: '14 червня 2021',
		},
		{
			href: '#',
			src: appleTv,
			alt: 'зображення iPhone 12',
			title: 'Змінюємо ваш iPhone 12 - з редизайном інтерфейсу Material You',
			content:
				'З 6 квітня до 26 червня включно при здачі будь-якого пристрою в трейд-ін отримаєте додаткову вигоду.',
			date: '14 червня 2021',
		},
		{
			href: '#',
			src: m1x,
			alt: 'зображення iPhone 12',
			title: 'Характеристики дуже швидкої SoC Apple M1X утекли до анонсу',
			content:
				'З 6 квітня до 26 червня включно при здачі будь-якого пристрою в трейд-ін отримаєте додаткову вигоду.',
			date: '14 червня 2021',
		},
		{
			href: '#',
			src: tradeIn,
			alt: 'зображення iPhone 12',
			title: 'Додаткова вигода при покупці iPhone 12 та iPhone 12 mini',
			content:
				'При сдаче любого устройства в ' +
				'трейд-ин получите дополнительную ' +
				'выгоду от 7 000 на покупку iPhone 12 и ' +
				'iPhone 12 mini.',
			date: '14 червня 2021',
		},
		{
			href: '#',
			src: appleTv,
			alt: 'зображення iPhone 12',
			title: 'Змінюємо ваш iPhone 12 - з редизайном інтерфейсу Material You',
			content:
				'З 6 квітня до 26 червня включно при здачі будь-якого пристрою в трейд-ін отримаєте додаткову вигоду.',
			date: '14 червня 2021',
		},
	];

	return (
		<div className={classes.news}>
			<CardSlider
				title={'Акции и новости'}
				label={'Все акции и новости'}
				label_href={'#'}
				data={state}
				component={cardNews}
			/>
		</div>
	);
};

export default News;
