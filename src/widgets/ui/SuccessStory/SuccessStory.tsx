import React, { useId } from 'react';
import classes from './SuccessStory.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import SliderNav from 'shared/ui/buttons/SliderNav/SliderNav';
const SuccessStory = () => {
	const state = [
		{
			title: '2017',
			subTitle:
				'Більше 85 наших магазинів розташовані в 21 місті Київ, в кожному з них є ' +
				'демонстраційні моделі пристроїв Apple, які ви можете випробувати і зробити свій ' +
				'вибір. Неодноразово партери відзначали нашу роботу.',
			content:
				"У році нам було надано статус найбільшого дистриб'ютора в Східній Європі за елементами " +
				'живлення Philips; у році ми відзначені як компанія, що увійшла до трійки найбільших' +
				" дистриб'юторів у світі за продукцією Pleomax (аксесуарний бренд компанії Samsung), у " +
				"році компанія Kodak надала нам статус найбільшого дистриб'ютора у світі за своєю продукцією. ”",
		},
		{
			title: '2018',
			subTitle:
				'Більше 85 наших магазинів розташовані в 21 місті Київ, в кожному з них є ' +
				'демонстраційні моделі пристроїв Apple, які ви можете випробувати і зробити свій ' +
				'вибір. Неодноразово партери відзначали нашу роботу.',
			content:
				"У році нам було надано статус найбільшого дистриб'ютора в Східній Європі за елементами " +
				'живлення Philips; у році ми відзначені як компанія, що увійшла до трійки найбільших' +
				" дистриб'юторів у світі за продукцією Pleomax (аксесуарний бренд компанії Samsung), у " +
				"році компанія Kodak надала нам статус найбільшого дистриб'ютора у світі за своєю продукцією. ”",
		},
		{
			title: '2019',
			subTitle:
				'Більше 85 наших магазинів розташовані в 21 місті Київ, в кожному з них є ' +
				'демонстраційні моделі пристроїв Apple, які ви можете випробувати і зробити свій ' +
				'вибір. Неодноразово партери відзначали нашу роботу.',
			content:
				"У році нам було надано статус найбільшого дистриб'ютора в Східній Європі за елементами " +
				'живлення Philips; у році ми відзначені як компанія, що увійшла до трійки найбільших' +
				" дистриб'юторів у світі за продукцією Pleomax (аксесуарний бренд компанії Samsung), у " +
				"році компанія Kodak надала нам статус найбільшого дистриб'ютора у світі за своєю продукцією. ”",
		},
		{
			title: '2020',
			subTitle:
				'Більше 85 наших магазинів розташовані в 21 місті Київ, в кожному з них є ' +
				'демонстраційні моделі пристроїв Apple, які ви можете випробувати і зробити свій ' +
				'вибір. Неодноразово партери відзначали нашу роботу.',
			content:
				"У році нам було надано статус найбільшого дистриб'ютора в Східній Європі за елементами " +
				'живлення Philips; у році ми відзначені як компанія, що увійшла до трійки найбільших' +
				" дистриб'юторів у світі за продукцією Pleomax (аксесуарний бренд компанії Samsung), у " +
				"році компанія Kodak надала нам статус найбільшого дистриб'ютора у світі за своєю продукцією. ”",
		},
		{
			title: '2021',
			subTitle:
				'Більше 85 наших магазинів розташовані в 21 місті Київ, в кожному з них є ' +
				'демонстраційні моделі пристроїв Apple, які ви можете випробувати і зробити свій ' +
				'вибір. Неодноразово партери відзначали нашу роботу.',
			content:
				"У році нам було надано статус найбільшого дистриб'ютора в Східній Європі за елементами " +
				'живлення Philips; у році ми відзначені як компанія, що увійшла до трійки найбільших' +
				" дистриб'юторів у світі за продукцією Pleomax (аксесуарний бренд компанії Samsung), у " +
				"році компанія Kodak надала нам статус найбільшого дистриб'ютора у світі за своєю продукцією. ”",
		},
	];
	const pagination = {
		el: `.${classes.pagination}`,
		bulletClass: classes.pagination__bullet,
		bulletActiveClass: `${classes.pagination__bullet_active}`,
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return `<span class=" typography--h4 ${className}">${state[index].title}</span>`;
		},
	};
	return (
		<div className={classes.successStory}>
			<div className={classes.content}>
				<div className={classes.control}>
					<SliderNav type={'prev'} className={'SuccessPrevSlide'} />
					<div className={classes.pagination} />
					<SliderNav type={'next'} className={'SuccessNextSlide'} />
				</div>
				<Swiper
					className={classes.slider}
					pagination={pagination}
					slidesPerView={1}
					loop={true}
					modules={[Pagination, Navigation]}
					navigation={{
						prevEl: `.SuccessPrevSlide`,
						nextEl: `.SuccessNextSlide`,
					}}
				>
					{state.map((slide) => (
						<SwiperSlide key={useId()}>
							<div className={classes.slide}>
								<h3 className={'typography--h3'}>
									{slide.title}
								</h3>
								<div
									className={`typography--decor-small ${classes.slideBody}`}
								>
									<p>{slide.subTitle}</p>
									<p>{slide.content}</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default SuccessStory;
