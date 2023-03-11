import React, { useState } from 'react';
import classes from './News.module.css';
import { SwiperSlide } from 'swiper/react';
import CardSlider from 'entities/ui/CardSlider/CardSlider';
//images
import tradeIn from 'images/news/tradeIn.svg';
import redesign from 'images/news/redesign.svg';
import m1x from 'images/news/m1x.svg';
import fiveG from 'images/news/5g.svg';
import appleTv from 'images/news/appleTv.svg';
import { renderComponent } from 'widgets/helper/renderComponent';
import cardNews from 'entities/ui/Cards/CardNews/CardNews';

interface CardData {
	src: string;
	title: string;
	content: string;
	date?: string;
	href: string;
	className?: string;
}

const News: React.FC = () => {
	const [state] = useState<CardData[]>([
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
		},
		{
			href: '#',
			src: redesign,
			title: 'Змінюємо ваш iPhone 12 - з редизайном інтерфейсу Material You',
			content:
				'З 6 квітня до 26 червня включно при здачі будь-якого пристрою в трейд-ін отримаєте додаткову вигоду.',
			date: '14 червня 2021',
		},
		{
			href: '#',
			src: m1x,
			title: 'Характеристики дуже швидкої SoC Apple M1X утекли до анонсу',
			content:
				'З 6 квітня до 26 червня включно при здачі будь-якого пристрою в трейд-ін отримаєте додаткову вигоду.',
			date: '14 червня 2021',
		},
		{
			href: '#',
			src: fiveG,
			title: 'Змінюємо ваш iPhone 12 - з редизайном інтерфейсу Material You',
			content:
				'З 6 квітня до 26 червня включно при здачі будь-якого пристрою в трейд-ін отримаєте додаткову вигоду.',
			date: '14 червня 2021',
		},
		{
			href: '#',
			src: appleTv,
			title: 'Змінюємо ваш iPhone 12 - з редизайном інтерфейсу Material You',
			content:
				'З 6 квітня до 26 червня включно при здачі будь-якого пристрою в трейд-ін отримаєте додаткову вигоду.',
			date: '14 червня 2021',
		},
		{
			href: '#',
			src: m1x,
			title: 'Характеристики дуже швидкої SoC Apple M1X утекли до анонсу',
			content:
				'З 6 квітня до 26 червня включно при здачі будь-якого пристрою в трейд-ін отримаєте додаткову вигоду.',
			date: '14 червня 2021',
		},
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
		},
		{
			href: '#',
			src: appleTv,
			title: 'Змінюємо ваш iPhone 12 - з редизайном інтерфейсу Material You',
			content:
				'З 6 квітня до 26 червня включно при здачі будь-якого пристрою в трейд-ін отримаєте додаткову вигоду.',
			date: '14 червня 2021',
		},
	]);
	return (
		<div className={classes.news}>
			<CardSlider title={'Акции и новости'} label={'Все акции и новости'}>
				{renderComponent({
					data: state,
					wrapper: SwiperSlide,
					component: cardNews,
				})}
			</CardSlider>
		</div>
	);
};

export default News;
