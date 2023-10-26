import React from 'react'

const Navigation: React.FC = () => {
	return (
		<section className='navigation'>
			<div className='nav-container'>
				<div className='nav__box'>
					<div className='nav__links'>
						<h4 className='nav__links_item'>Каталог</h4>
						<h4 className='nav__links_item'>Галерея</h4>
						<h4 className='nav__links_item'>Вопрос-ответ</h4>
						<h4 className='nav__links_item'>Гарантия</h4>
						<div className='nav__links_logo'>
							<img src='/src/assets/icons/nav-icons/nav-logo.svg' alt='' />
						</div>
						<h4 className='nav__links_item'>Рассрочка</h4>
						<h4 className='nav__links_item'>Контакты</h4>
					</div>
					<div className='nav__socials'>
						<div className='nav__socials_item'>
							<img src='/src/assets/icons/nav-icons/nav-social-vk.svg' alt='' />
						</div>
						<div className='nav__socials_item'>
							<img
								src='/src/assets/icons/nav-icons/nav-social-telegram.svg'
								alt=''
							/>
						</div>
						<div className='nav__socials_item'>
							<img
								src='/src/assets/icons/nav-icons/nav-social-cart.svg'
								alt=''
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Navigation
