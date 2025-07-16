import React from 'react'
import { assets } from '../assets/assets'

const Testimonial = ({ image, name, role, stars, text }) => {
    return (
        <div
            className='bg-white/20 p-12 rounded-lg shadow-md border border-gray-400/60 w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all duration-300'>
            <div className='flex flex-col items-center'>
                <img
                    src={image}
                    alt="testimonial-image"
                    className='rounded-full w-14'
                />
                <h2 className='text-xl font-semibold mt-3'>{name}</h2>
                <p className='text-gray-500 mb-4'>{role}</p>
                <div className='flex mb-4'>
                    {Array(stars).fill().map((_, index) => (
                        <img
                            key={index}
                            src={assets.rating_star}
                            alt='stars'
                        />
                    ))}
                </div>
                <p className='text-center text-sm text-gray-600'>{text}</p>
            </div>
        </div>
    )
}

export default Testimonial