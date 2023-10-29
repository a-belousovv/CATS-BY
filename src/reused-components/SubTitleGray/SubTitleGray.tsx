import React from 'react'
import { ReusedTitle } from '../../@types/Reused/types'

const SubTitleGray: React.FC<ReusedTitle> = ({ className, text }) => {
	return <h3 className={`block-subtitle ${className}`}>{text}</h3>
}

export default SubTitleGray
