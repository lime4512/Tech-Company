import { Banner } from '@/components/banner/Banner'
import './globals.scss'
import { Who } from '@/components/who/Who'
import { Future } from '@/components/future/Future'
import { CardList } from '@/components/cardList/CardList'
import { Form } from '@/components/form/Form'
export default function Home() {
	return (
		<div className='main'>
			<Banner />
			<div className='main-container'>
				<Who />
				<Future />
				<CardList />
				<Form />
			</div>
		</div>
	)
}
