import React from 'react';
import classes from './ProductCard.module.css';
import { ReactComponent as RatingStar } from 'shared/static/images/Product/raringStar.svg';
import { ReactComponent as CommentsIcon } from 'shared/static/images/icons/comments.svg';
import { ReactComponent as WishIcon } from 'shared/static/images/icons/wishIcon.svg';
import { ReactComponent as BasketIcon } from 'shared/static/images/icons/basket.svg';
interface propTypes {
	src: string;
	alt: string;
	href: string;
	title: string;
	price: string;
	oldPrice?: string;
	discount?: boolean;
	new?: boolean;
	popular?: boolean;
}
const ProductCard: React.FC<propTypes> = (props) => {
	return (
		<a href={props.href} className={classes.productCard}>
			<div className={classes.product}>
				<div className={`${classes.productTop} typography--small`}>
					<div className={classes.labelWrapper}>
						<p
							className={
								props.discount
									? `${classes.label} ${classes.labelDiscount}`
									: classes.disabled
							}
						>
							Знижка -20%
						</p>
						<p
							className={
								props.new
									? `${classes.label} ${classes.labelNew}`
									: classes.disabled
							}
						>
							Новинка
						</p>
						<p
							className={
								props.popular
									? `${classes.label} ${classes.labelPopular}`
									: classes.disabled
							}
						>
							Популярне
						</p>
					</div>
					<WishIcon />
				</div>
				<div className={classes.image}>
					<img src={props.src} alt={props.alt} />
				</div>
				<div className={classes.description}>
					<div className={classes.subInfo}>
						<div className={classes.rating}>
							<RatingStar className={classes.ratingActive} />
							<RatingStar />
							<RatingStar />
							<RatingStar />
							<RatingStar />
						</div>
						<div className={`${classes.comments} typography--small`}>
							<p>12</p>
							<span>
								<CommentsIcon />
							</span>
						</div>
					</div>
					<p className={'typography--base'}>{props.title}</p>
					<div className={classes.buy}>
						<p className={'typography--h4'}>
							{props.price} &#x20b4;
							<span className={'typography--base'}>
								{props.oldPrice} &#x20b4;
							</span>
						</p>
						<BasketIcon />
					</div>
				</div>
			</div>
		</a>
	);
};

export default ProductCard;
