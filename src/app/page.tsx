import { Banner } from '@/components/banner/Banner'
import './globals.scss'
import { Who } from '@/components/who/Who'
export default function Home() {
	return (
		<div className='main'>
			<Banner />
			<div className='main-container'>
				<Who />
			</div>
		</div>
	)
}
