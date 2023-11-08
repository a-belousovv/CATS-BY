import React from 'react'

const CartBottom = () => {
	return (
		<div className='cart-bottom' id='cart-form'>
			<div className='cart-bottom__box'>
				<h2 className='cart__box_title'>Оформление заказа</h2>
				<form className='cart__box_form'>
					<input type='text' placeholder='Имя' className='cart__form_input' />
					<input
						type='text'
						placeholder='Фамилия'
						className='cart__form_input'
					/>
					<div className='cart__form_items-two'>
						<input
							type='text'
							placeholder='Email'
							className='cart__form_input'
						/>
						<input
							type='text'
							placeholder='+375 (__) ___ __ __'
							className='cart__form_input'
						/>
					</div>
				</form>
				<div className='cart__box_details'>
					<div className='cart__details_item delivery'>
						<h4 className='cart__item_title'>Способ доставки</h4>
						<div className='cart__delivery_item'>
							<div className='cart__item_button'></div>
							<h4 className='cart__item_title'>Доставка</h4>
						</div>
						<div className='cart__delivery_item'>
							<div className='cart__item_button'></div>
							<h4 className='cart__item_title'>Самовывоз</h4>
						</div>
					</div>
					<div className='cart__details_item address'>
						<h4 className='cart__item_title'>Адрес доставки</h4>
						<div className='cart__address_list'>
							<div className='cart__list_header'>
								<h3 className='cart__header_title'>Москва</h3>
								<div className='cart__header_img'>
									<img src='/icons/cart-bottom/cart-list-open.svg' alt='' />
								</div>
							</div>
							<div className='cart__list_items'></div>
						</div>
						<form action='' className='cart__address_form'>
							<input
								type='text'
								className='cart__form_input'
								placeholder='Улица'
							/>
							<div className='cart__form_items-three'>
								<input
									type='text'
									className='cart__form_input'
									placeholder='Дом'
								/>
								<input
									type='text'
									className='cart__form_input'
									placeholder='Этаж'
								/>
								<input
									type='text'
									className='cart__form_input'
									placeholder='Кв.'
								/>
							</div>
						</form>
					</div>
				</div>
				<div className='cart__box_comment'>
					<h4 className='cart__comment_title'>Комментарий к заказу</h4>
					<textarea
						className='cart__comment_textarea'
						placeholder='Текст сообщения'
						maxLength={500}
						rows={9}></textarea>
					<div className='cart__comment_agreement'>
						<div className='cart__agreement_button'></div>
						<h4 className='cart__agreement_title'>
							Даю согласие на обработку <a href=''>персональных данных</a>
						</h4>
					</div>
				</div>
				<button className='cart__box_button-accept'>Оформить заказ</button>
			</div>
		</div>
	)
}

export default CartBottom
