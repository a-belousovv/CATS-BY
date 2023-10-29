import React from 'react'
import { ReusedTitle } from '../../@types/Reused/types'

const TitleGray: React.FC<ReusedTitle> = ({ className, text }) => {
	return <h2 className={`block-title-bg-gray ${className}`}>{text}</h2>
}

export default TitleGray
