import React from 'react';
import ProductCard from 'entities/Cards/ProductCard/ProductCard';
import iphone12mini from 'shared/static/images/Product/iphonePurple.svg';
import iphone12mini2 from 'shared/static/images/Product/iphone2.svg';
import ipad from 'shared/static/images/Product/ipad.svg';
import macbook from 'shared/static/images/Product/macboock.svg';
import headphones from 'shared/static/images/Product/headphones.svg';

import CardSlider from 'entities/CardSlider/CardSlider';

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
		<div className={className}>
			<CardSlider
				title={'Акции и новости'}
				label={'Все акции и новости'}
				label_href={'#'}
				data={state}
				component={ProductCard}
			/>
		</div>
	);
};

export default Popular;
