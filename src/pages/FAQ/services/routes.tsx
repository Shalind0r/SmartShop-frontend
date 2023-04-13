import {
	GeneralRoute,
	ReceivingRoute,
	ReturnRoute,
	ServiceRoute,
} from 'pages/FAQ/services/routes_path';
import Accordions from 'widgets/Accordions/Accordions';
import { data } from 'pages/FAQ/services/db';
import React from 'react';

export const { routes, navLinks } = {
	routes: [
		{
			path: GeneralRoute,
			element: <Accordions data={data.generalQuestion} />,
		},
		{
			path: ReceivingRoute,
			element: <Accordions data={data.receivingQuestion} />,
		},
		{
			path: ReturnRoute,
			element: <Accordions data={data.returnQuestion} />,
		},
		{
			path: ServiceRoute,
			element: <Accordions data={data.servicesQuestion} />,
		},
	],
	navLinks: [
		{ route: GeneralRoute, title: 'Загальні питання' },
		{ route: ReceivingRoute, title: 'Отримання замовлення' },
		{ route: ReturnRoute, title: 'Поверення та обмін' },
		{ route: ServiceRoute, title: 'Сервіс та гарантія' },
	],
};
