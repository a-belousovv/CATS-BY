import React, { useState } from 'react'
import { ComplexArrayItem, MaterialItem } from '../../@types/Complex/types'

const Complex: React.FC = () => {
	const [activeMaterial, setActiveMaterial] = useState(0)
	const [activeCabel, setActiveCabel] = useState(0)
	const MaterialArray: MaterialItem[] = [
		{
			id: 0,
			src: '/src/assets/pictures/combination/inputs/oak-natural.png',
		},
		{
			id: 1,
			src: '/src/assets/pictures/combination/inputs/oak-light.png',
		},
		{
			id: 2,
			src: '/src/assets/pictures/combination/inputs/oak-dark.png',
		},
	]
	const ButtonsArray: MaterialItem[] = [
		{
			id: 0,
			src: '/src/assets/pictures/combination/inputs/rope-white.png',
		},
		{
			id: 1,
			src: '/src/assets/pictures/combination/inputs/rope-black.png',
		},
	]
	const ComplexItemArray: ComplexArrayItem[] = [
		{
			id: 0,
			cabel: 0,
			material: 0,
			items: [
				{
					id: 0,
					src: '/src/assets/pictures/complex/item1.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 1,
					src: '/src/assets/pictures/complex/item1.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 1,
					src: '/src/assets/pictures/complex/item1.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 0,
					src: '/src/assets/pictures/complex/item1.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 1,
					src: '/src/assets/pictures/complex/item1.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 1,
					src: '/src/assets/pictures/complex/item1.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
			],
		},
		{
			id: 1,
			cabel: 0,
			material: 1,
			items: [
				{
					id: 0,
					src: '/src/assets/pictures/complex/item2.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 1,
					src: '/src/assets/pictures/complex/item2.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 1,
					src: '/src/assets/pictures/complex/item2.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 0,
					src: '/src/assets/pictures/complex/item2.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 1,
					src: '/src/assets/pictures/complex/item2.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 1,
					src: '/src/assets/pictures/complex/item2.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
			],
		},
		{
			id: 2,
			cabel: 0,
			material: 2,
			items: [
				{
					id: 0,
					src: '/src/assets/pictures/complex/item3.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 1,
					src: '/src/assets/pictures/complex/item3.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 1,
					src: '/src/assets/pictures/complex/item3.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 0,
					src: '/src/assets/pictures/complex/item3.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 1,
					src: '/src/assets/pictures/complex/item3.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 1,
					src: '/src/assets/pictures/complex/item3.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
			],
		},
		{
			id: 3,
			cabel: 1,
			material: 0,
			items: [
				{
					id: 0,
					src: '/src/assets/pictures/complex/item4.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 1,
					src: '/src/assets/pictures/complex/item4.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 1,
					src: '/src/assets/pictures/complex/item4.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 0,
					src: '/src/assets/pictures/complex/item4.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 1,
					src: '/src/assets/pictures/complex/item4.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 1,
					src: '/src/assets/pictures/complex/item4.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
			],
		},
		{
			id: 4,
			cabel: 1,
			material: 1,
			items: [
				{
					id: 0,
					src: '/src/assets/pictures/complex/item5.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 1,
					src: '/src/assets/pictures/complex/item5.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 1,
					src: '/src/assets/pictures/complex/item5.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 0,
					src: '/src/assets/pictures/complex/item5.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 1,
					src: '/src/assets/pictures/complex/item5.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 1,
					src: '/src/assets/pictures/complex/item5.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
			],
		},
		{
			id: 5,
			cabel: 1,
			material: 2,
			items: [
				{
					id: 0,
					src: '/src/assets/pictures/complex/item6.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 1,
					src: '/src/assets/pictures/complex/item6.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 1,
					src: '/src/assets/pictures/complex/item6.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 0,
					src: '/src/assets/pictures/complex/item6.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 1,
					src: '/src/assets/pictures/complex/item6.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
				{
					id: 1,
					src: '/src/assets/pictures/complex/item6.jpg',
					price: '19 900 ₽',
					priceDiscount: '23 880 ₽',
					payment: '1990&nbsp;₽ × 10 мес. в рассрочку',
					info: 'Catsby Family Stand',
				},
			],
		},
	]

	const findArray = ComplexItemArray.find(
		(obj) => obj.cabel == activeCabel && obj.material == activeMaterial
	)

	if (findArray) {
		return (
			<div className='complex'>
				<div className='block-container'>
					<div className='complex__box'>
						<h2 className='complex__title'>Выбери свой комплекс</h2>
						<div className='complex__buttons'>
							<div className='complex__buttons_item'>
								<h3 className='complex__item_title'>Натуральный дуб</h3>
								<div className='complex__item_colors'>
									{MaterialArray.map((item) => {
										return (
											<div
												className={`complex__colors_color ${
													item.id == activeMaterial ? 'active' : ''
												}`}
												key={item.id}
												onClick={() => setActiveMaterial(item.id)}>
												<img src={item.src} alt='' />
											</div>
										)
									})}
								</div>
							</div>
							<div className='complex__buttons_item'>
								<h3 className='complex__item_title'>Белый канат</h3>
								<div className='complex__item_colors'>
									{ButtonsArray.map((item) => {
										return (
											<div
												className={`complex__colors_color ${
													item.id == activeCabel ? 'active' : ''
												}`}
												key={item.id}
												onClick={() => setActiveCabel(item.id)}>
												<img src={item.src} alt='' />
											</div>
										)
									})}
								</div>
							</div>
						</div>
						<div className='complex__items'>
							{findArray.items.map((item) => {
								return (
									<div className='complex__items_item' key={item.id}>
										<div className='complex__item_img'>
											<img src={item.src} alt='' />
										</div>
										<div className='complex__item_content'>
											<div className='complex__item_header'>
												<h3 className='complex__header_title'>{item.price}</h3>
												<h3 className='complex__header_title discount'>
													{item.priceDiscount}
												</h3>
											</div>
											<div className='complex__item_payment'>
												<h4 className='complex__payment_title'>
													{item.payment}
												</h4>
											</div>
											<div className='complex__item_info'>
												<p className='complex__info_text'>{item.info}</p>
											</div>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Complex
