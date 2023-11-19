import Image from 'next/image'
import './Header.scss'
import { Button } from '../button/Button'
export const Header = () => {
	return (
		<header className='header-container'>
			<div className='logo'>
				<Image src='/image1.png' alt='logo' width={276} height={37} />
			</div>
			<div className='header-nav'>
				<ul className='header-list'>
					<li>
						<a href=''>Home</a>
					</li>
					<li>
						<a href=''>About Us</a>
					</li>
					<li>
						<a href=''>Services</a>
					</li>
					<li>
						<a href=''>Careers</a>
					</li>
				</ul>
				<Button text='Contact Us' />
			</div>
		</header>
	)
}
