import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
	const [nav, setNav] = useState(false)

	const navHandler = () => {
		setNav(!nav)
	}

	return (
		<div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
			<h1 className='w-full text-3xl font-bold text-brightGreen select-none'>SUDOTECH.</h1>

			<ul className='hidden md:flex'>
				<li className='p-4 cursor-pointer hover:text-gray-400'>Home</li>
				<li className='p-4 cursor-pointer hover:text-gray-400'>Company</li>
				<li className='p-4 cursor-pointer hover:text-gray-400'>Resources</li>
				<li className='p-4 cursor-pointer hover:text-gray-400'>About</li>
				<li className='p-4 cursor-pointer hover:text-gray-400'>Contact</li>
			</ul>

			<div onClick={navHandler} className='block cursor-pointer md:hidden'>
				{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>
			<div className={nav ? 'fixed left-0 top-0 z-10 w-[60%] h-full border-r border-r-gray-900 bg-darkBlack ease-in-out duration-500' : 'fixed left-[-100%]'}>
				<h1 className='w-full text-3xl font-bold text-brightGreen m-4 select-none'>SUDOTECH.</h1>
				<ul className='uppercase p-4'>
					<li className='select-none cursor-pointer p-4 hover:text-gray-400 border-b border-gray-600'>Home</li>
					<li className='select-none cursor-pointer p-4 hover:text-gray-400 border-b border-gray-600'>Company</li>
					<li className='select-none cursor-pointer p-4 hover:text-gray-400 border-b border-gray-600'>Resources</li>
					<li className='select-none cursor-pointer p-4 hover:text-gray-400 border-b border-gray-600'>About</li>
					<li className='select-none cursor-pointer p-4 hover:text-gray-400'>Contact</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar