import Image from 'next/image'
import './FutureItem.scss'
import { FunctionComponent } from 'react'

interface Props {
	title: string
	text: string
	img: string
}

export const FutureItem: FunctionComponent<Props> = ({ title, text, img }) => {
	return (
		<div className='futureItem-container'>
			<Image src={img} alt='image' width={108} height={108} />
			<div className='futureItem-content'>
				<h1 className='futureItem-title'>{title}</h1>
				<p className='futureItem-text'>{text}</p>
			</div>
		</div>
	)
}
