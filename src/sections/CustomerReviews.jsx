import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className=' font-palanquin font-bold text-center text-4xl'>
        What Our
        <span className='text-coral-red'> Customers </span>
        Say?
      </h3>
      <p className='info-text m-auto mt-4 max-w-lg'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className='mt-24 flex flex-1 justify-evenly max-lg:flex-col gap-14'>
        {reviews.map(reviews => (
          <ReviewCard key={reviews.id} {...reviews} imgURL={reviews.imgURL} customerName={reviews.customerName} rating={reviews.rating} feedback={reviews.feedback}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews