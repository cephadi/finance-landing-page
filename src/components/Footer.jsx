import React from 'react'
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-brightGreen select-none'>SUDOTECH.</h1>
            <p className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique rerum itaque perferendis quam harum iste quos earum iusto culpa ad!</p>
            <div className='flex md:justify-between justify-evenly md:w-[75%] my-6'>
                <FaFacebookSquare size={30} className='cursor-pointer hover:text-brightGreen' />
                <FaInstagramSquare size={30} className='cursor-pointer hover:text-brightGreen' />
                <FaTwitterSquare size={30} className='cursor-pointer hover:text-brightGreen' />
                <FaGithubSquare size={30} className='cursor-pointer hover:text-brightGreen' />
                <FaDribbbleSquare size={30} className='cursor-pointer hover:text-brightGreen' />
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400 uppercase'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm hover:text-gray-600 cursor-pointer'>Analytics</li>
                    <li className='py-2 text-sm hover:text-gray-600 cursor-pointer'>Marketing</li>
                    <li className='py-2 text-sm hover:text-gray-600 cursor-pointer'>Commerce</li>
                    <li className='py-2 text-sm hover:text-gray-600 cursor-pointer'>Insights</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400 uppercase'>Support</h6>
                <ul>
                    <li className='py-2 text-sm hover:text-gray-600 cursor-pointer'>Pricing</li>
                    <li className='py-2 text-sm hover:text-gray-600 cursor-pointer'>Documentation</li>
                    <li className='py-2 text-sm hover:text-gray-600 cursor-pointer'>Guides</li>
                    <li className='py-2 text-sm hover:text-gray-600 cursor-pointer'>API Status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400 uppercase'>Company</h6>
                <ul>
                    <li className='py-2 text-sm hover:text-gray-600 cursor-pointer'>About</li>
                    <li className='py-2 text-sm hover:text-gray-600 cursor-pointer'>Blog</li>
                    <li className='py-2 text-sm hover:text-gray-600 cursor-pointer'>Jobs</li>
                    <li className='py-2 text-sm hover:text-gray-600 cursor-pointer'>Press</li>
                    <li className='py-2 text-sm hover:text-gray-600 cursor-pointer'>Careers</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400 uppercase'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm hover:text-gray-600 cursor-pointer'>Claim</li>
                    <li className='py-2 text-sm hover:text-gray-600 cursor-pointer'>Policy</li>
                    <li className='py-2 text-sm hover:text-gray-600 cursor-pointer'>Terms</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer