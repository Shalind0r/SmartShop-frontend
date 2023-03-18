import React from 'react';
import SeoItem from 'entities/ui/SeoItem/SeoItem';
import classes from './SEO.module.css';
import { Scrollbars } from 'react-custom-scrollbars';

const Seo: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<div className={`${classes.seo} ${className}`}>
			<Scrollbars
				renderTrackVertical={(props) => (
					<div {...props} className={classes.trackVertical} />
				)}
				renderThumbVertical={(props) => (
					<div {...props} className={classes.thumbVertical} />
				)}
				style={{ width: '100%', height: 304 }}
			>
				<h3 className={'typography--h3'}>
					SEO Текст гаджетів, які занурять вас у віртуальну реальність
				</h3>
				<div className={classes.content}>
					<SeoItem title={'Інтернет магазин побутової техніки та електроніки'}>
						Як прийнято вважати, інтерактивні прототипи є не що інше, як
						квінтесенцію перемоги маркетингу над розумом і повинні бути
						представлені у виключно позитивному світлі. У рамках специфікації
						сучасних стандартів, репліковані із зарубіжних джерел, сучасні
						дослідження, які є яскравим прикладом континентально-європейського
						типу політичної культури, будуть перетворені на посміховисько,
						хоча саме їх існування приносить безсумнівну користь суспільству.
						А також представників сучасних соціальних резервів можуть бути
						своєчасно верифіковані. Завдання організації, особливо
						високоякісний прототип майбутнього проекту однозначно визначає
						кожного учасника як здатного приймати власні рішення щодо
						приорітизації розуму над емоціями.
					</SeoItem>
					<SeoItem title={'Інтернет магазин побутової електроніки'}>
						Але незалежні держави неоднозначні і будуть віддані
						соціально-демократичній анафемі. Насамперед, згуртованість команди
						професіоналів однозначно визначає кожного учасника як здатного
						приймати власні рішення щодо переосмислення зовнішньоекономічних
						політик. Є спірна думка, яка говорить приблизно таке: дії
						представників опозиції лише додають фракційних розбіжностей і
						вказані як претенденти на роль ключових факторів. Підвищення рівня
						громадянської свідомості забезпечує широкому колу (фахівців)
						участь у формуванні своєчасного виконання надзавдання!
					</SeoItem>
					<SeoItem title={'Інтернет магазин побутової електроніки'}>
						Але незалежні держави неоднозначні і будуть віддані
						соціально-демократичній анафемі. Насамперед, згуртованість команди
						професіоналів однозначно визначає кожного учасника як здатного
						приймати власні рішення щодо переосмислення зовнішньоекономічних
						політик. Є спірна думка, яка говорить приблизно таке: дії
						представників опозиції лише додають фракційних розбіжностей і
						вказані як претенденти на роль ключових факторів. Підвищення рівня
						громадянської свідомості забезпечує широкому колу (фахівців)
						участь у формуванні своєчасного виконання надзавдання!
					</SeoItem>
					<SeoItem title={'Інтернет магазин побутової електроніки'}>
						Але незалежні держави неоднозначні і будуть віддані
						соціально-демократичній анафемі. Насамперед, згуртованість команди
						професіоналів однозначно визначає кожного учасника як здатного
						приймати власні рішення щодо переосмислення зовнішньоекономічних
						політик. Є спірна думка, яка говорить приблизно таке: дії
						представників опозиції лише додають фракційних розбіжностей і
						вказані як претенденти на роль ключових факторів. Підвищення рівня
						громадянської свідомості забезпечує широкому колу (фахівців)
						участь у формуванні своєчасного виконання надзавдання!
					</SeoItem>
					<SeoItem title={'Інтернет магазин побутової електроніки'}>
						Але незалежні держави неоднозначні і будуть віддані
						соціально-демократичній анафемі. Насамперед, згуртованість команди
						професіоналів однозначно визначає кожного учасника як здатного
						приймати власні рішення щодо переосмислення зовнішньоекономічних
						політик. Є спірна думка, яка говорить приблизно таке: дії
						представників опозиції лише додають фракційних розбіжностей і
						вказані як претенденти на роль ключових факторів. Підвищення рівня
						громадянської свідомості забезпечує широкому колу (фахівців)
						участь у формуванні своєчасного виконання надзавдання!
					</SeoItem>
				</div>
			</Scrollbars>
		</div>
	);
};

export default Seo;
