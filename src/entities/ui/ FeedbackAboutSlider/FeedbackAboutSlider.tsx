import React, { useId } from 'react';
import classes from './FeedbackAboutSlider.module.css';
import SliderNav from 'shared/ui/buttons/SliderNav/SliderNav';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

const FeedbackAboutSlider: React.FC = () => {
	const state = [
		{
			feedback:
				'Віктор розповість, як фотографу-початківцю\n' +
				'орієнтуватися в нескінченних потоках навчальних\n' +
				'матеріалів, чим надихатися для створення\n' +
				'оригінальних зйомок, як справлятися з кризою в\n' +
				'роботі і знову повертатися в творче русло. Слухачі\n' +
				'лекції дізнаються, як саме варто розвивати себе, щоб\n' +
				'досягти відчутного результату та знайти власний\n' +
				'авторський стиль.',
			author: 'Олена Беркова',
		},
		{
			feedback:
				'Віктор розповість, як фотографу-початківцю\n' +
				'орієнтуватися в нескінченних потоках навчальних\n' +
				'матеріалів, чим надихатися для створення\n' +
				'оригінальних зйомок, як справлятися з кризою в\n' +
				'роботі і знову повертатися в творче русло. Слухачі\n' +
				'лекції дізнаються, як саме варто розвивати себе, щоб\n' +
				'досягти відчутного результату та знайти власний\n' +
				'авторський стиль.',
			author: 'Беркова Олена ',
		},
	];

	return (
		<div>
			<div className={classes.control}>
				<SliderNav type={'prev'} className={classes.prevSlide} />
				<SliderNav type={'next'} className={classes.nextSlide} />
			</div>
			<Swiper
				slidesPerView={1}
				loop={true}
				modules={[Navigation]}
				navigation={{
					prevEl: `.${classes.prevSlide}`,
					nextEl: `.${classes.nextSlide}`,
				}}
				className={classes.slider}
			>
				{state.map((state) => (
					<SwiperSlide key={useId()}>
						<div className={classes.slide}>
							<p className={'typography--decor-small'}>
								{state.feedback}
							</p>
							<p className={'typography--decor-smallB'}>
								{state.author}
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default FeedbackAboutSlider;
