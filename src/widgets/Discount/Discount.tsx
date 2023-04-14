import React from 'react';
import CardSlider from 'entities/CardSlider/CardSlider';

// image
import appleWatch from 'shared/static/images/Discount/appleWatch.svg';
import headphones from 'shared/static/images/Discount/headphones.svg';
import amplifier from 'shared/static/images/Discount/amplifier.svg';
import iphone from 'shared/static/images/Discount/iphone.svg';
import macbook from 'shared/static/images/Discount/macbook.svg';
import ProductCard from 'entities/Cards/ProductCard/ProductCard';

const Discount: React.FC<{ className?: string; title: string }> = ({
	className,
	title,
}) => {
	const state = [
		{
			href: '#',
			src: appleWatch,
			alt: 'зображення appleWatch.svg',
			discount: true,
			title: 'Beats Powerbeats Pro, серия Totally Wireless, «вогненно-червоний»',
			price: '214 999',
			oldPrice: '218 999 ',
		},
		{
			href: '#',
			src: headphones,
			alt: 'зображення навушників',
			discount: true,
			title: 'Apple iPhone 12 mini, 128 ГБ, фіолетовий',
			price: '816 632 ',
			oldPrice: '837 229 ',
		},
		{
			href: '#',
			src: amplifier,
			alt: 'зображення посилювача',
			discount: true,
			title: 'Посилювач для наушників Epos GSX 1000',
			price: '816 632 ',
			oldPrice: '837 229 ',
		},
		{
			href: '#',
			src: iphone,
			alt: 'зображення Iphone',
			discount: true,
			new: true,
			title: 'Apple iPhone 12 mini, 128 ГБ, фіолетовий',
			price: '816 632 ',
			oldPrice: '837 229 ',
		},
		{
			href: '#',
			src: macbook,
			alt: 'зображення macbook',
			discount: true,
			popular: true,
			title: 'Apple iPhone 12 mini, 128 ГБ, фіолетовий',
			price: '816 632 ',
			oldPrice: '837 229 ',
		},
		{
			href: '#',
			src: headphones,
			alt: 'зображення навушників',
			discount: true,
			title: 'Apple iPhone 12 mini, 128 ГБ, фіолетовий',
			price: '816 632 ',
			oldPrice: '837 229 ',
		},
		{
			href: '#',
			src: amplifier,
			alt: 'зображення посилювача',
			discount: true,
			title: 'Посилювач для наушників Epos GSX 1000',
			price: '816 632 ',
			oldPrice: '837 229 ',
		},
	];
	return (
		<div className={className}>
			<CardSlider
				title={title}
				label={'Все акции и новости'}
				label_href={'#'}
				data={state}
				component={ProductCard}
			/>
		</div>
	);
};

export default Discount;
