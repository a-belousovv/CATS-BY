import React from 'react'

const Header: React.FC = () => {
	return (
		<div className='header'>
			<div className='header__bg'>
				<img src='/src/assets/backgrounds/header/header-bg.jpg' alt='' />
			</div>
			<div className='block-container'>
				<div className='header__box'>
					<h1 className='header__title'>
						СОВРЕМЕННАЯ МЕБЕЛЬ <span>ДЛЯ КОШЕК</span>
					</h1>
					<h2 className='header__subtitle'>
						Игровые комплексы и когтеточки из натурального дуба в скандинавском
						стиле
					</h2>
					<div className='header__button-choose'>Выбрать комплекс</div>
				</div>
			</div>
		</div>
	)
}

export default Header
