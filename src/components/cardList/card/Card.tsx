import Image from 'next/image'
import './Card.scss'
import { FunctionComponent } from 'react'

interface Props {
	title: string
	text: string
	img: string
}

export const Card: FunctionComponent<Props> = ({ title, text, img }) => {
	return (
		<div className='card-container'>
			<div className='card-img'>
				<Image src={img} alt='img' width={100} height={100} />
			</div>
			<div className='card-content'>
				<h1 className='card-title'>{title}</h1>
				<p className='card-text'>{text}</p>
				<a href='' className='card-more'>
					READ MORE
				</a>
			</div>
		</div>
	)
}
