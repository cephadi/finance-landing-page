import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Card = ({ iconImg, isRecommend }) => {
    let btnClass = 'bg-brightGreen w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black hover:bg-brightGreenLight'
    let cardClass = 'w-full shadow-xl border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'
    let imgClass = 'w-20 mx-auto mt-[-3rem] bg-white'
    if (isRecommend) {
        btnClass = 'bg-black text-brightGreen w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-gray-500'
        cardClass = 'w-full bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'
        imgClass = 'w-20 mx-auto mt-[-3rem] bg-transparent'
    }

    return (
        <div className={cardClass}>
            <img src={iconImg} alt="Sudotech Finance" className={imgClass} />
            <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-center text-4xl font-bold'>$149</p>
            <div className='text-center font-medium mt-8'>
                <p className='py-2 border-b mx-8'>500 GB Storage</p>
                <p className='py-2 border-b mx-8'>1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className={btnClass}>Start Trial</button>
        </div>
    )
}

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <Card iconImg={Single} />
            <Card iconImg={Double} isRecommend={true} />
            <Card iconImg={Triple} />
        </div>
    </div>
  )
}

export default Cards