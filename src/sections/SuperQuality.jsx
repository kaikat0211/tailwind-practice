import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'
const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            We Provide You <span className='text-coral-red'>Super</span>
          </span>
          <span className='text-coral-red inline-block mt-3'>Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing with you unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 info-text lg:max-w-lg'>Our dedication to detail and excellence ensures your satisfaction</p>
        <div className='mt-11'>
          <Button label='View detail '/>
        </div>
      </div>
      <div className='flex flex-1 justify-center items-center'>
          <img src={shoe8} alt='shoe8' width={570} height={522} className='object-contain'/>
      </div>
    </section>
  )
}

export default SuperQuality