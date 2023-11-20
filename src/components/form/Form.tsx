import Image from 'next/image'
import { Button } from '../button/Button'
import './Form.scss'

export const Form = () => {
	return (
		<div className='form-container'>
			<div className='form-content'>
				<h1 className='form-title'>Say Hi!</h1>
				<h3 className='form-subtitle'>We’d like to talk with you.</h3>
				<form action=''>
					<p className='form-titleInput'>My name is</p>
					<input type='text' className='form-inp' placeholder='Full name' />
					<p className='form-titleInput'>My email is</p>
					<input type='text' className='form-inp' placeholder='Email' />
					<p className='form-titleInput'>Your message</p>
					<textarea
						name='comment'
						className='form-comment'
						placeholder='I want to say that...'
					></textarea>
					<div className='button-form'>
						<Button text='Send message' />
					</div>
				</form>
			</div>
			<div className='form-contact'>
				<div className='form-gradient'>
					<h1 className='contact-title'>Contact Information</h1>
					<p className='contact-text'>
						Fill up the form and our Team will get back to you within 24 hours.
					</p>
					<div className='contact-content'>
						<Image src='/call.png' width={14} height={14} alt='img' />
						<span>(+40) 772 100 200</span>
					</div>
					<div className='contact-content'>
						<Image src='/mail.png' width={14} height={14} alt='img' />
						<span>hello@indium-technology.com</span>
					</div>
					<div className='contact-content'>
						<Image src='/location.png' width={14} height={14} alt='img' />
						<span>Deák Ferenc utca 23.2.emelet, Budapest, 1052,HU</span>
					</div>
					<ul className='icon-list'>
						<li className='icon-item'>
							<Image src='/l-1.png' width={19} height={19} alt='img' />
						</li>
						<li className='icon-item'>
							<Image src='/l-2.png' width={19} height={19} alt='img' />
						</li>
						<li className='icon-item'>
							<Image src='/l-3.png' width={19} height={19} alt='img' />
						</li>
						<li className='icon-item'>
							<Image src='/l-4.png' width={19} height={19} alt='img' />
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
