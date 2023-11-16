import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks/hooks'
import { ComplexItemsItem } from '../../../@types/redux/ComplexTypes/types'
import { setIsBurger } from '../../../redux/slices/Navigation/Navigation'

const Navigation: React.FC = () => {
	const dispatch = useAppDispatch()
	const cart = useAppSelector((state) => state.cart.cart)

	const totalCount = cart.reduce(
		(sum: number, item: ComplexItemsItem) => sum + item.count,
		0
	)

	const isBurger = useAppSelector((state) => state.navigation.isBurger)
	const [isOpenBurger, setIsOpenBurger] = useState(false)
	useEffect(() => {
		if (window.innerWidth < 1340) {
			dispatch(setIsBurger(true))
		} else {
			dispatch(setIsBurger(false))
		}
	}, [window.innerWidth])

	useEffect(() => {
		if (isOpenBurger) {
			document.body.classList.add('hide')
		} else {
			document.body.classList.remove('hide')
		}
	}, [isOpenBurger])
	return (
		<section className='navigation'>
			<div className='nav-container'>
				{isBurger ? (
					<div className='nav__burger '>
						<div className={`nav__burger_header ${isOpenBurger ? 'hide' : ''}`}>
							<div
								className='nav__burger_button'
								onClick={() => setIsOpenBurger(true)}>
								<img src='/icons/nav-icons/burger.svg' alt='' />
							</div>
							<Link to='/' className='nav__burger_logo'>
								<img src='/icons/nav-icons/nav-logo.svg' alt='' />
							</Link>
							<div className='nav__burger_right'></div>
						</div>
						<div
							className={`nav__burger_content ${
								isOpenBurger ? 'open-burger' : 'hide'
							}`}>
							<div className='nav__content_header'>
								<div
									className='nav__header_button-close'
									onClick={() => setIsOpenBurger(false)}>
									<img src='/icons/cart-top/button-close.svg' alt='' />
								</div>
								<Link to='/' className='nav__links_logo'>
									<img src='/icons/nav-icons/nav-logo.svg' alt='' />
								</Link>
								<div className='nav__header_right'></div>
							</div>
							<div className='nav__content_items'>
								<Link to='/catalog' className='nav__items_item'>
									Каталог
								</Link>
								<Link to='/' className='nav__items_item'>
									Каталог
								</Link>
								<Link to='/' className='nav__items_item'>
									Каталог
								</Link>
								<Link to='/' className='nav__items_item'>
									Каталог
								</Link>

								<div className='nav__socials'>
									<div className='nav__socials_item'>
										<img src='/icons/nav-icons/nav-social-vk.svg' alt='' />
									</div>
									<div className='nav__socials_item'>
										<img
											src='/icons/nav-icons/nav-social-telegram.svg'
											alt=''
										/>
									</div>
									<Link to='/cart' className='nav__socials_item'>
										<img src='/icons/nav-icons/nav-social-cart.svg' alt='' />
										{totalCount == 0 ? null : (
											<div className='nav__socials_item-notification'>
												{totalCount}
											</div>
										)}
									</Link>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className='nav__box'>
						<div className='nav__links'>
							<Link to='/catalog' className='nav__links_item'>
								Каталог
							</Link>
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
								{totalCount == 0 ? null : (
									<div className='nav__socials_item-notification'>
										{totalCount}
									</div>
								)}
							</Link>
						</div>
					</div>
				)}
			</div>
		</section>
	)
}

export default Navigation
