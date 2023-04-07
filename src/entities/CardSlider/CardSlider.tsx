import React from 'react';
import classes from './CardSlider.module.css';
import SliderNav from 'shared/ui/buttons/SliderNav/SliderNav';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import LinkWithArrow from 'shared/ui/links/LinkWithArrow/LinkWithArrow';
import { useMap } from 'hooks/useMap';
import { useAppDispatch, useAppSelector } from 'store/hooks/redux';
import { params } from 'entities/CardSlider/services/params';
import {
	SetActiveSlide,
	SetIsLastSlide,
} from 'store/reducers/SliderSlice/SliderSlice';
import { IFunc, IProps, swiperType } from 'entities/CardSlider/services/types';
const CardSlider: React.FC<IProps> = (props) => {
	const dispatch = useAppDispatch();
	const handleSlideChange = (swiper: swiperType<IFunc>) => {
		dispatch(SetActiveSlide(swiper.realIndex));
		dispatch(SetIsLastSlide(swiper.isEnd));
	};
	const { activeSlide, isLastSlide } = useAppSelector(
		(state) => state.sliderReducer,
	);
	return (
		<div className={` container ${props.className}`}>
			<div className={classes.top}>
				<h3 className={'typography--h3'}>{props.title}</h3>
				<LinkWithArrow content={props.label} href={props.label_href} />
			</div>
			<Swiper
				onSlideChange={handleSlideChange}
				className={classes.slider}
				{...params}
			>
				{useMap({
					wrapperClassName: 'cardSliderSlide',
					data: props.data,
					wrapper: SwiperSlide,
					component: props.component,
				})}
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
