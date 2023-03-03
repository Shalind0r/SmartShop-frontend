import React, { useState } from 'react';
import classes from './Slider.module.css';
// Import Swiper React components
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import firstSlide from 'images/slider/ipad.svg';
import secondSlide from 'images/slider/iphone.svg';
import Slide from 'entities/ui/Slide/Slide';
interface SwiperType {
	realIndex: number;
}
const Slider: () => JSX.Element = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	const handleSlideChange = (swiper: SwiperType) => {
		setActiveSlide(swiper.realIndex);
	};
	const [slide] = useState([
		{
			title: 'Знайомтесь новий і швидкий iPadPro M1X',
			button: 'Детальніше',
			src: firstSlide,
			label: '12,9″ Дисплей Liquid Retina XDR Процесор Apple M1',
			price: '41 999 ₴',
			key: 1,
		},
		{
			title: 'Ваша нова сильна сторона iPhone 12',
			button: 'Детальніше',
			src: secondSlide,
			label: '6,1″ Дисплей OLED дисплей Чип A13 Bionic',
			price: '29 999 ₴',
			key: 2,
		},
	]);
	let slideItem = slide.map((elem, index) => (
		<SwiperSlide key={elem.key}>
			<Slide
				src={elem.src}
				title={elem.title}
				class={
					index === activeSlide
						? `${classes.slideDescription} ${classes.active}`
						: classes.slideDescription
				}
				label={elem.label}
				price={elem.price}
			/>
		</SwiperSlide>
	));
	return (
		<Swiper
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
			onSlideChange={handleSlideChange}
		>
			{slideItem}
		</Swiper>
	);
};
export default Slider;
