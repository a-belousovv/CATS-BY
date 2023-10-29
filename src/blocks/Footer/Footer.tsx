import React from 'react'

const Footer: React.FC = () => {
	return (
		<div className='footer'>
			<div className='block-container'>
				<div className='footer__box'>
					<div className='footer__header'>
						<div className='footer__header_img'>
							<img src='/src/assets/icons/footer/footer-logo.svg' alt='' />
						</div>
						<div className='footer__header_items'>
							<h3 className='footer__items_item'>Каталог</h3>
							<h3 className='footer__items_item'>Галерея</h3>
							<h3 className='footer__items_item'>Гарантия</h3>
							<h3 className='footer__items_item'>Оплата и доставка</h3>
						</div>
					</div>
					<div className='footer__hr'></div>
					<div className='footer__bottom'>
						<div className='footer__bottom-left'>
							<h4 className='footer__bottom_item-left'>
								Политика обработки персональных данных
							</h4>
							<h4 className='footer__bottom_item-left'>Оферта</h4>
						</div>
						<div className='footer__bottom-right'>
							<div className='footer__banks_item'>
								<img src='/src/assets/icons/footer/footer-halva.svg' alt='' />
							</div>
							<div className='footer__banks_item'>
								<img src='/src/assets/icons/footer/footer-mir.svg' alt='' />
							</div>
							<div className='footer__banks_item'>
								<img src='/src/assets/icons/footer/footer-sbp.svg' alt='' />
							</div>
							<div className='footer__banks_item'>
								<img src='/src/assets/icons/footer/footer-visa.svg' alt='' />
							</div>
							<div className='footer__banks_item'>
								<img
									src='/src/assets/icons/footer/footer-mastercard.svg'
									alt=''
								/>
							</div>
						</div>
					</div>
					<h4 className='footer__date_info'>© 2020-2023 ООО КЭТСБИ ФЭМИЛИ</h4>
				</div>
			</div>
		</div>
	)
}

export default Footer
