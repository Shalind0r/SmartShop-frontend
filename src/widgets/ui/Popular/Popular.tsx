import React from 'react';
import ProductCard from 'entities/ui/Cards/ProductCard/ProductCard';
import iphone12mini from 'shared/static/images/Product/iphonePurple.svg';
import iphone12mini2 from 'shared/static/images/Product/iphone2.svg';
import ipad from 'shared/static/images/Product/ipad.svg';
import macbook from 'shared/static/images/Product/macboock.svg';
import headphones from 'shared/static/images/Product/headphones.svg';
import { renderComponent } from 'widgets/helper/renderComponent';
import CardSlider from 'entities/ui/CardSlider/CardSlider';
import { SwiperSlide } from 'swiper/react';

const Popular: React.FC<{ className?: string }> = ({ className }) => {
	const state = [
		{
			href: '#',
			popular: true,
			src: iphone12mini,
			alt: 'зображення айфона',
			title: 'Apple iPhone 12 mini, 128 ГБ, фіолетовий',
			price: '816 632',
			oldPrice: '837 229',
		},
		{
			href: '#',
			popular: true,
			src: iphone12mini2,
			alt: 'зображення айфона',
			title: 'Apple iPhone 12 mini, 128 ГБ, фіолетовий',
			price: '727 632 ',
			oldPrice: '837 229 ',
		},
		{
			href: '#',
			popular: true,
			src: ipad,
			alt: 'зображення айпада',
			title: 'Apple iPad Pro (2021) 12,9" Wi-Fi 512 ГБ, «сірий космос»',
			price: '816 632',
			oldPrice: '837 229',
		},
		{
			href: '#',
			popular: true,
			src: macbook,
			alt: 'зображення макбука',
			title: 'Apple iPhone 12 Pro Max, 512 ГБ, «тихоокеанський синій»',
			price: '816 632',
			oldPrice: '837 229',
		},
		{
			href: '#',
			popular: true,
			src: headphones,
			alt: 'зображення навушників',
			title: 'Apple iPhone 12 mini, 256 ГБ, фіолетовий',
			price: '727 632 ',
			oldPrice: '837 229',
		},
		{
			href: '#',
			popular: true,
			src: iphone12mini,
			alt: 'зображення айфона',
			title: 'Apple iPhone 12 mini, 128 ГБ, фіолетовий',
			price: '816 632',
			oldPrice: '837 229',
		},
	];
	return (
		<CardSlider
			className={className}
			title={'Популярное'}
			label={'Всі популярні товари'}
			label_href={'#'}
		>
			{renderComponent({
				data: state,
				wrapper: SwiperSlide,
				component: ProductCard,
			})}
		</CardSlider>
	);
};

export default Popular;
