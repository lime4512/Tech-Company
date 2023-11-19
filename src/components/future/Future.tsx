import Image from 'next/image'
import './Future.scss'
import { FutureItem } from './futureItem/FutureItem'
export const Future = () => {
	return (
		<div className='future-container'>
			<div className='future-img'>
				<Image src='/AdobeStock-3.png' alt='img' width={960} height={604} />
			</div>
			<div className='future-content'>
				<h2 className='future-subtitle'>we build future</h2>
				<div className='future-img-arrow'>
					<Image src='/Arrow3.svg' alt='arrow' width={63} height={19} />
				</div>
				<div className='future-items'>
					<FutureItem
						title='Our Mission & Vision '
						text='As experienced professionals in the field of software development, user experience, and marketing performance, we are aware of the hard work, dedication, and overall diligence required to prosper in modern-day business.'
						img='/target-1.png'
					/>
					<FutureItem
						title=' Our Approach '
						text='As a result, we offer our clients with the development of CRM cloud systems, bespoke website development and design, project and R&D management, custom development, and system integration.'
						img='/pathway-1.png'
					/>
				</div>
			</div>
		</div>
	)
}
