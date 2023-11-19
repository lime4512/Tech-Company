import { FunctionComponent } from 'react'
import './Button.scss'

interface Props {
	text: string
}

export const Button: FunctionComponent<Props> = ({ text }) => {
	return <button className='global-btn'>{text}</button>
}
