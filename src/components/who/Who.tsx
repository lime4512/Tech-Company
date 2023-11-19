import Image from 'next/image'
import './Who.scss'
import { Button } from '../button/Button'

export const Who = () => {
	return (
		<div className='who-container'>
			<div className='who-content'>
				<h2 className='who-subtitle'>who we are</h2>
				<Image src='/Arrow2.svg' alt='arrow' width={63} height={19} />
				<h1 className='who-title'>
					Technology investments as a differentiator
				</h1>
				<p className='who-text'>
					No forced partnership technology here. We focus on the right solution
					to drive our clients’ business forward and employ a
					technology-agnostic approach for all needed stages of the activity
					cycle, allowing access to current, robust, and advanced solutions.
					Paramount to this is ensuring the security and compliant use of all
					information. In the end, it’s not just technology; we ensure our
					methodologies, staff, industry knowledge, and governance align with
					the technology to drive the right client results.
				</p>
				<Button text='Get started' />
			</div>
			<div className='who-img'>
				<Image src='/AdobeStock-2.png' alt='img' width={959.006} height={649} />
			</div>
		</div>
	)
}
