import React from 'react';
import classes from './Error404.module.css';
import errorImage from 'shared/static/images/Error404.jpg';
import ButtonAction from 'shared/ui/buttons/ButtonAction/ButtonAction';
import { MainRoute } from 'app/routes_path';
import Discount from 'widgets/Discount/Discount';
import PopularGadgets from 'widgets/PopularGadgets/PopularGadgets';
const Error404: React.FC = () => {
	return (
		<div>
			<div className={classes.errorPage__top}>
				<h1 className={'typography--h1'}>Помилка 404</h1>
				<img src={errorImage} alt={'зображення с помилкою'} />
				<p className={'typography--label-2'}>
					Сторінка, яку ви шукаєте, не існує або не доступна. <br />{' '}
					Ми маємо дуже цікавий варіант розвитку подій для вас!
				</p>
				<ButtonAction type={'link'} to={MainRoute}>
					Перейти на головну
				</ButtonAction>
			</div>
			<Discount className={classes.discount} title={'Знижки до 36%'} />
			<PopularGadgets className={classes.popular} />
		</div>
	);
};

export default Error404;
