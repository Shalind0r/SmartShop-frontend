import React, { ReactNode, useState } from 'react';
import classes from './CardSlider.module.css';
import { Navigation } from 'swiper';
import SliderNav from 'shared/ui/buttons/SliderNav/SliderNav';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { ReactComponent as Arrow } from 'shared/static/images/icons/buttons/arrow.svg';

interface propsType {
	children: ReactNode;
	title: string;
	label: string;
}
interface SwiperType {
	realIndex: number;
	isEnd: boolean;
}
const CardSlider: React.FC<propsType> = (props) => {
	const [activeSlide, setActiveSlide] = useState(0);
	const [isLastSlide, setIsLastSlide] = useState(false);
	const handleSlideChange = (swiper: SwiperType) => {
		setActiveSlide(swiper.realIndex);
		swiper.isEnd ? setIsLastSlide(true) : setIsLastSlide(false);
	};

	return (
		<div className={`${classes.cardSlider}`}>
			<div className={classes.top}>
				<h3 className={'typography--h3'}>{props.title}</h3>
				<a href="#" className={'typography--label'}>
					{props.label} <Arrow />
				</a>
			</div>
			<Swiper
				className={`${classes.slider}  `}
				modules={[Navigation]}
				onSlideChange={handleSlideChange}
				navigation={{
					prevEl: `.${classes.prevSlide}`,
					nextEl: `.${classes.nextSlide}`,
				}}
				breakpoints={{
					648: {
						slidesPerView: 2,
						spaceBetween: 50,
					},
					991: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1200: {
						slidesPerView: 4,
						spaceBetween: 10,
					},
					1920: {
						slidesPerView: 5,
						spaceBetween: 36,
					},
				}}
			>
				{props.children}
				<SliderNav
					type={'prev'}
					className={`${classes.prevSlide}  ${
						activeSlide === 0 ? classes.prevSlide_disabled : ''
					}`}
				/>
				<SliderNav
					type={'next'}
					className={`${classes.nextSlide} ${
						isLastSlide ? classes.prevSlide_disabled : ''
					}`}
				/>
			</Swiper>
		</div>
	);
};

export default CardSlider;
