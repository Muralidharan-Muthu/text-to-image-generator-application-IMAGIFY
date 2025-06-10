import React from 'react'
import { assets } from '../assets/assets'

const GenerateButton = () => {
    return (
        <button className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full hover:scale-[1.04] transition-all duration-300'>
            Generate Images
            <img src={assets.star_group} alt="star-group-icon" className='h-6' />
        </button>
    )
}

export default GenerateButton