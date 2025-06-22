import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const GenerateButton = () => {

    const { user, setShowLogin } = useContext(AppContext)
    const navigate = useNavigate()

    const onClickHandler = () => {
        if (user) {
            navigate('/result')
            window.scrollTo(0,0)
        }
        else {
            setShowLogin(true)
        }
    }

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}
            className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full hover:scale-[1.04] transition-all duration-300'
            onClick={onClickHandler}
        >
            Generate Images
            <img src={assets.star_group} alt="star-group-icon" className='h-6' />
        </motion.button>
    )
}

export default GenerateButton