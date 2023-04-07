import { EffectFade, Navigation, SwiperOptions } from 'swiper';
import classes from 'entities/CardSlider/CardSlider.module.css';

export const params: SwiperOptions = {
	watchSlidesProgress: true,
	modules: [Navigation, EffectFade],
	navigation: {
		prevEl: `.${classes.prevSlide}`,
		nextEl: `.${classes.nextSlide}`,
	},
	breakpoints: {
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
	},
};
