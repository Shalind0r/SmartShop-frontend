import { ComponentType } from 'react';
import { Swiper } from 'swiper/types';

export interface IProps {
	title: string;
	label: string;
	label_href: string;
	className?: string;
	component: ComponentType<any>;
	data: {}[];
}
export interface IFunc {
	realIndex: number;
	isEnd: boolean;
	activeIndex: number;
	slides: {};
	length: number;
}
export type swiperType<IFunc> = Swiper;
