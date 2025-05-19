import React from 'react'
import { assets } from '../assets/assets'

const Testimonial = ({ key, image, name, role, stars, text }) => {
    return (
        <div key={key}>
            <img
                src={image}
                alt="testimonial-image"
                className='rounded-full w-14'
            />
            <h2>{name}</h2>
            <p>{role}</p>
            <div className='flex mb-4'>
                {Array(stars).fill().map((_, index) => (
                    <img
                        key={index}
                        src={assets.rating_star}
                        alt='stars'
                    />
                ))}
            </div>
            <p>{text}</p>
        </div>
    )
}

export default Testimonial