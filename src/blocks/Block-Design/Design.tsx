import React from 'react'
import TitleOrange from '../../reused-components/TitleOrange/TitleOrange'
import SubTitleGray from '../../reused-components/SubTitleGray/SubTitleGray'
import TextGray from '../../reused-components/TextGray/TextGray'

const Design: React.FC = () => {
	return (
		<div className='design'>
			<div className='block-container'>
				<div className='design__box'>
					<div className='design__content'>
						<TitleOrange text='ДИЗАЙН' />
						<SubTitleGray text='Предмет искусства в вашем доме' />
						<TextGray
							text='Строгий и лаконичный скандинавский стиль порадует вашего
							внутреннего эстета. Настоящий дуб, хлопковый канат,
							гипоаллергенный фетр соответствуют духу времени — экологично,
							натурально, долговечно.'
						/>
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
