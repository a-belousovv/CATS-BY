import React from 'react'

const Design = () => {
	return (
		<div className='design'>
			<div className='block-container'>
				<div className='design__box'>
					<div className='design__content'>
						<h2 className='design__title block-title-orange'>ДИЗАЙН</h2>
						<h3 className='design__subtitle block-subtitle'>
							Предмет искусства в вашем доме
						</h3>
						<p className='design__text block-text'>
							Строгий и лаконичный скандинавский стиль порадует вашего
							внутреннего эстета. Настоящий дуб, хлопковый канат,
							гипоаллергенный фетр соответствуют духу времени — экологично,
							натурально, долговечно.
						</p>
					</div>
					<div className='design__img'>
						<img src='/src/assets/pictures/design/design-item.jpg' alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Design
