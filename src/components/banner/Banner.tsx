import Image from 'next/image'
import { Button } from '../button/Button'
import './Banner.scss'

export const Banner = () => {
	return (
		<div className='banner-container'>
			<div className='banner-gradient'>
				<div className='banner-content'>
					<h1 className='banner-title'>DISCOVER A WORLD OF OPPORTUNITIES</h1>
					<p className='banner-text'>
						We empower a diverse IT service-oriented workforce where strong
						individuals are unified by a clear common purpose – to deliver
						excellence and high level of customer satisfaction.
					</p>
					<Button text='Get started' />
					<Image
						src='/Arrow.svg'
						alt='Стрелка'
						width={44.618}
						height={50}
						className='arrow'
					/>
				</div>
			</div>
		</div>
	)
}
