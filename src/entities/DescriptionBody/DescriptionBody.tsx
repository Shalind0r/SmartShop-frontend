import React from 'react';
import classes from './DescriptionBody.module.css';
import gadgets from 'shared/static/images/About/photo.png';
import ButtonAction from 'shared/ui/buttons/ButtonAction/ButtonAction';
import { Link } from 'react-router-dom';
import { CatalogRoute } from 'app/routes_path';
import { useAppDispatch } from 'store/hooks/redux';
import { setPreviousPath } from 'store/reducers/RoutesSlice/RoutesSlice';

const DescriptionBody: React.FC = () => {
	const dispatch = useAppDispatch();
	return (
		<div className={classes.body}>
			<img src={gadgets} alt="зображення гаджетів" />
			<div className={`${classes.content} typography--base`}>
				<p className={`${classes.subTitle} typography--decor`}>
					<span>“</span> Наша продукція — високотехнологічна техніка у своїй
					галузі, зручна, яка приносить вам задоволення і рідко вимагає
					технічної підтримки
				</p>
				<p>
					Це не просто техніка — це спосіб життя. <br />
					Приєднуйся! <br /> Ти молодий, креативний і береш від життя максимум?
					З нами ти можеш стати не просто власником техніки, а справжнім носієм
					духу легендарного бренду Apple!
				</p>
				<ul>
					<li>
						Думаю, що вбудований акумулятор став би крутою фічею без
						акумулятора
					</li>
					<li>
						Інша річ, що пристрої із вбудованими батареями транспортуються
						інакше, ніж гаджети
					</li>
					<li>
						Другий момент – відсутність будь-яких слотів для карт пам&#39;яті
					</li>
				</ul>
				<Link
					onClick={() => setPreviousPath(location.pathname)}
					to={CatalogRoute}
				>
					<ButtonAction className={classes.button} type={'button'}>
						Перейти в каталог
					</ButtonAction>
				</Link>
			</div>
		</div>
	);
};

export default DescriptionBody;
