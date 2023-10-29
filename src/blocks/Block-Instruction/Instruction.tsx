import { useEffect, useState } from 'react'
import TitleGray from '../../reused-components/TitleCardsBgGray/TitleGray'

const Instruction = () => {
	const [windowScroll, setWindowScroll] = useState(0)
	useEffect(() => {
		window.addEventListener('scroll', () => {
			setWindowScroll(window.scrollY)
		})
	}, [window.scrollY])
	return (
		<div className='instruction'>
			<div className='block-container'>
				<div className='instruction__box'>
					<div className='instruction__animation'>
						<img
							src='/src/assets/pictures/instruction/instruction.png'
							alt=''
							className={`instruction__animation_img-instruction ${
								windowScroll > 9950 ? 'active' : ''
							}`}
						/>
						<img
							src='/src/assets/pictures/instruction/screwdriver.png'
							alt=''
							className={`instruction__animation_img-screwdriver ${
								windowScroll > 9950 ? 'active' : ''
							}`}
						/>
						<img
							src='/src/assets/pictures/instruction/wrench.png'
							alt=''
							className={`instruction__animation_img-wrench ${
								windowScroll > 9950 ? 'active' : ''
							}`}
						/>
						<div className='instruction__animation__box'>
							<img
								src='/src/assets/pictures/instruction/box.png'
								alt=''
								className='instruction__animation_img-box'
							/>
							<img
								src='/src/assets/pictures/instruction/box-front.png'
								alt=''
								className='instruction__animation_img-box front'
							/>
						</div>
					</div>
					<div className='instruction__content'>
						<div className='instruction__content_item'>
							<TitleGray text='Инструкция в картинках' />

							<p className='instruction__item_text'>
								Не нужно уметь читать, чтобы собрать когтеточку.
							</p>
							<p className='instruction__item_text'>
								Среднее время сборки комплекса — 12 минут.
							</p>
						</div>
						<div className='instruction__content_item'>
							<TitleGray text='Инструменты в комплекте' />

							<p className='instruction__item_text'>
								Весь инструмент для сборки когтеточки — в комплекте.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Instruction
