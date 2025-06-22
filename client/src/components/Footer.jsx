import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()

    const homeNavigateHandler = () => {
        if (navigate !== "/") {
            navigate("/")
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className='flex items-center justify-center gap-4 py-3 mt-20'>
            <img src={assets.logo} alt="logo" width={150} className='cursor-pointer' onClick={homeNavigateHandler} />
            <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @Muralidharan.M | All rights reserved.</p>
            <div className='flex gap-2.5'>
                <img
                    className='cursor-pointer'
                    src={assets.facebook_icon} alt="facebook" width={35} />
                <img
                    className='cursor-pointer'
                    src={assets.instagram_icon} alt="instagram" width={35} />
                <img
                    className='cursor-pointer'
                    src={assets.twitter_icon} alt="twitter" width={35} />
            </div>
        </div>
    )
}

export default Footer