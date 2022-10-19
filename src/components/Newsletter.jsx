import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='text-2xl md:text-4xl sm:text-3xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input type="email" name="email" placeholder='Enter Email' className='p-3 flex w-full rounded-md text-black' />
                    <button className='bg-brightGreen w-[200px] rounded-md font-medium my-6 md:ml-4 sm:ml-4 mx-auto px-6 py-3 text-black hover:bg-brightGreenLight'>Notify Me</button>
                </div>
                <p>We care about the protection of your data. Read our <span className='text-brightGreen'>Privacy Policy</span>.</p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter