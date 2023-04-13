import React, { useId, useState } from 'react';
import classes from './Slider.module.css';
// Import Swiper React components
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import firstSlide from 'images/slider/ipad.jpg';
import secondSlide from 'images/slider/iphone.jpg';
import Slide from 'entities/Slide/Slide';

const Slider: React.FC = () => {
	const state = [
		{
			title: 'Знайомтесь новий і швидкий iPadPro M1X',
			button: 'Детальніше',
			src: firstSlide,
			label: '12,9″ Дисплей Liquid Retina XDR Процесор Apple M1',
			price: '41 999 ₴',
		},
		{
			title: 'Ваша нова сильна сторона iPhone 12',
			button: 'Детальніше',
			src: secondSlide,
			label: '6,1″ Дисплей OLED дисплей Чип A13 Bionic',
			price: '29 999 ₴',
		},
		{
			title: 'Знайомтесь новий і швидкий iPadPro M1X',
			button: 'Детальніше',
			src: firstSlide,
			label: '12,9″ Дисплей Liquid Retina XDR Процесор Apple M1',
			price: '41 999 ₴',
		},
		{
			title: 'Ваша нова сильна сторона iPhone 12',
			button: 'Детальніше',
			src: secondSlide,
			label: '6,1″ Дисплей OLED дисплей Чип A13 Bionic',
			price: '29 999 ₴',
		},
		{
			title: 'Знайомтесь новий і швидкий iPadPro M1X',
			button: 'Детальніше',
			src: firstSlide,
			label: '12,9″ Дисплей Liquid Retina XDR Процесор Apple M1',
			price: '41 999 ₴',
		},
		{
			title: 'Ваша нова сильна сторона iPhone 12',
			button: 'Детальніше',
			src: secondSlide,
			label: '6,1″ Дисплей OLED дисплей Чип A13 Bionic',
			price: '29 999 ₴',
		},
	];

	return (
		<Swiper
			watchSlidesProgress={true}
			modules={[Navigation, Autoplay, Pagination, EffectFade]}
			slidesPerView={1}
			loop={true}
			autoplay={{ delay: 7000 }}
			navigation={true}
			pagination={{
				clickable: true,
				dynamicBullets: true,
			}}
			className={classes.slider}
			effect={'fade'}
		>
			{state.map((data) => (
				<SwiperSlide key={useId()} className={'slideWithDescription'}>
					<Slide {...data}></Slide>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
export default Slider;
