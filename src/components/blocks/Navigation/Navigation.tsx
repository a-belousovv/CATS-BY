import React from 'react'
import { Link } from 'react-router-dom'

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
						<Link to='/' className='nav__links_logo'>
							<img src='/icons/nav-icons/nav-logo.svg' alt='' />
						</Link>
						<h4 className='nav__links_item'>Рассрочка</h4>
						<h4 className='nav__links_item'>Контакты</h4>
					</div>
					<div className='nav__socials'>
						<div className='nav__socials_item'>
							<img src='/icons/nav-icons/nav-social-vk.svg' alt='' />
						</div>
						<div className='nav__socials_item'>
							<img src='/icons/nav-icons/nav-social-telegram.svg' alt='' />
						</div>
						<Link to='/cart' className='nav__socials_item'>
							<img src='/icons/nav-icons/nav-social-cart.svg' alt='' />
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Navigation
