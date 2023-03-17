import React from 'react';
import CardSlider from 'entities/ui/CardSlider/CardSlider';
import { renderComponent } from 'widgets/helper/renderComponent';
import { SwiperSlide } from 'swiper/react';
import ProductCard from 'entities/ui/Cards/ProductCard/ProductCard';
import mixer from 'shared/static/images/Novelties/mixer.svg';
import appleWatch from 'shared/static/images/Novelties/appleWatch.svg';
import iphone from 'shared/static/images/Novelties/iphone.svg';
import samsung from 'shared/static/images/Novelties/samsung.svg';
import airtag from 'shared/static/images/Novelties/airtag.svg';

const Novelties: React.FC = () => {
	const state = [
		{
			href: '#',
			popular: true,
			new: true,
			src: mixer,
			alt: 'зображення миксера',
			title: 'Apple iPhone 12 mini, 128 ГБ, фіолетовий',
			price: '214 999',
		},
		{
			href: '#',
			new: true,
			src: appleWatch,
			alt: 'зображення apple watch',
			title: 'Apple iPhone 12 mini, 128 ГБ, фіолетовий',
			price: '816 632',
		},
		{
			href: '#',
			new: true,
			src: iphone,
			alt: 'зображення iphone',
			title: 'Apple iPhone 12 mini, 256 ГБ, фіолетовий',
			price: '727 632 ',
		},

		{
			href: '#',
			new: true,
			popular: true,
			src: samsung,
			alt: 'зображення телефона samsung',
			title: 'Apple iPad Pro (2021) 12,9" Wi-Fi 512 ГБ, «сірий космос»',
			price: '816 632',
		},
		{
			href: '#',
			new: true,
			src: airtag,
			alt: 'зображення airtag',
			title: 'Apple iPhone 12 Pro Max, 512 ГБ, «тихоокеанський синій»',
			price: '816 632',
		},
		{
			href: '#',
			new: true,
			src: appleWatch,
			alt: 'зображення apple watch',
			title: 'Apple iPhone 12 mini, 128 ГБ, фіолетовий',
			price: '816 632',
		},
		{
			href: '#',
			new: true,
			src: iphone,
			alt: 'зображення iphone',
			title: 'Apple iPhone 12 mini, 256 ГБ, фіолетовий',
			price: '727 632 ',
		},
	];
	return (
		<CardSlider title={'Новинки'} label={'Все новинки'} label_href={'#'}>
			{renderComponent({
				data: state,
				wrapper: SwiperSlide,
				component: ProductCard,
			})}
		</CardSlider>
	);
};

export default Novelties;
