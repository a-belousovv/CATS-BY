import React, { useState } from 'react'
import {
	CombinationArrayItem,
	TreesandCablesItem,
} from '../../@types/Combination/types'

const Combination: React.FC = () => {
	const [activeTree, setActiveTree] = useState(0)
	const [activeCable, setActiveCable] = useState(0)
	const trees: TreesandCablesItem[] = [
		{ src: '/src/assets/pictures/combination/inputs/oak-natural.png', id: 0 },
		{ src: '/src/assets/pictures/combination/inputs/oak-light.png', id: 1 },
		{ src: '/src/assets/pictures/combination/inputs/oak-dark.png', id: 2 },
	]
	const cables: TreesandCablesItem[] = [
		{ src: '/src/assets/pictures/combination/inputs/rope-white.png', id: 0 },
		{ src: '/src/assets/pictures/combination/inputs/rope-black.png', id: 1 },
	]
	const combinationArray: CombinationArrayItem[] = [
		{
			treeTitle: 'Натуральный дуб',
			cableTitle: 'Белый канат',
			tree: 0,
			cable: 0,
			src: '/src/assets/pictures/combination/items/wall-natural-white-light.jpg',
			id: 0,
		},
		{
			treeTitle: 'Белёный дуб',
			cableTitle: 'Белый канат',
			tree: 1,
			cable: 0,
			src: '/src/assets/pictures/combination/items/wall-light-white-light.jpg',
			id: 1,
		},
		{
			treeTitle: 'Тёмный дуб',
			cableTitle: 'Белый канат',
			tree: 2,
			cable: 0,
			src: '/src/assets/pictures/combination/items/wall-dark-white-light.jpg',
			id: 1,
		},
		{
			treeTitle: 'Натуральный дуб',
			cableTitle: 'Чёрный канат',
			tree: 0,
			cable: 1,
			src: '/src/assets/pictures/combination/items/wall-natural-black-light.jpg',
			id: 0,
		},
		{
			treeTitle: 'Белёный дуб',
			cableTitle: 'Чёрный канат',
			tree: 1,
			cable: 1,
			src: '/src/assets/pictures/combination/items/wall-light-black-light.jpg',
			id: 1,
		},
		{
			treeTitle: 'Тёмный дуб',
			cableTitle: 'Чёрный канат',
			tree: 2,
			cable: 1,
			src: '/src/assets/pictures/combination/items/wall-dark-black-light.jpg',
			id: 1,
		},
	]

	const findItem = combinationArray.find(
		(obj) => obj.cable == activeCable && obj.tree == activeTree
	)

	if (findItem) {
		return (
			<div className='combination'>
				<div className='block-container'>
					<div className='combination__box'>
						<div className='combination__item ' key={findItem.id}>
							<div className='combination__img'>
								<img src={findItem.src} alt='' />
							</div>
							<div className='combination__content'>
								<h2 className='combination__title block-title-bg-gray'>
									Комбинация для вашего интерьера
								</h2>
								<div className='combination__choose_block'>
									<h3 className='combination__choose_title'>
										{findItem.treeTitle}
									</h3>
									<div className='combination__options_block'>
										{trees.map((item) => {
											return (
												<div
													onClick={() => setActiveTree(item.id)}
													key={item.id}
													className={`combination__choose_options ${
														activeTree == item.id ? 'active' : ''
													} `}>
													<img src={item.src} alt='' />
												</div>
											)
										})}
									</div>
								</div>
								<div className='combination__choose_block'>
									<h3 className='combination__choose_title'>
										{findItem.cableTitle}
									</h3>
									<div className='combination__options_block'>
										{cables.map((item) => {
											return (
												<div
													onClick={() => setActiveCable(item.id)}
													key={item.id}
													className={`combination__choose_options ${
														activeCable == item.id ? 'active' : ''
													} `}>
													<img src={item.src} alt='' />
												</div>
											)
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Combination
