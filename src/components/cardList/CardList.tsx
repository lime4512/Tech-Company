import './CardList.scss'
import Image from 'next/image'
import { Card } from './card/Card'
export const CardList = () => {
	return (
		<div className='cardList-container'>
			<h2 className='cardList-subtitle'>Our products</h2>
			<Image src='/Arrow2.svg' alt='arrow' width={63} height={19} />

			<div className='cardList-content'>
				<Card
					title='System Integration'
					text='In today’s digital world, the ability to effectively integrate across different systems, data sources, and channels is fundamental. Indium technologies has a long history of successfully and efficiently integrating a variety of client-based systems'
					img='/support.svg'
				/>
				<div className='cardList-top'>
					<Card
						title='IT Services'
						text='While you focus on delivering the best products or services you can to your customers, we provide the support you need to keep up with industry demands and emerging trends'
						img='/desktop1.svg'
					/>
				</div>
				<Card
					title='Process Optimization'
					text='Improve efficiencies by leveraging methodology and productivity tools. Re-energize workforce management to identify saving opportunities, optimize contacts or enhance front-/back-office productive output'
					img='/browser1.svg'
				/>
			</div>
		</div>
	)
}
