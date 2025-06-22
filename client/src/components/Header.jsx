import { assets } from '../assets/assets';
import GenerateButton from './GenerateButton';
import { motion } from "motion/react"

const Header = () => {
    return (
        <motion.div className='flex flex-col items-center justify-center text-center my-20'
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

        >
            <motion.div className='text-stone-500 inline-flex items-center text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <p>Best text to image generator</p>
                <img src={assets.star_icon} alt="star-icon" />
            </motion.div>
            <motion.h1
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
                transition={{ delay: 0.4, duration: 2 }}
                className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn text to <span className='text-blue-600'>image</span>, in seconds.</motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className='text-center text-stone-700 max-w-xl mx-auto mt-5'>Unleash your creativity with AI. Turn your imagination into visual art in seconds - just type, and watch the magic happen.</motion.p>
            <GenerateButton />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className='flex flex-wrap justify-center mt-16 gap-3'>
                {Array(6).fill('').map((_, index) => (
                    <motion.img
                        whileHover={{ scale: 1.05, duration: 0.1 }}
                        className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10'
                        src={index % 2 ? assets.sample_img_1 : assets.sample_img_2}
                        alt="sample-image"
                        key={index}
                        width={70} />
                ))}
            </motion.div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className='mt-2 text-neutral-600 text-sm sm:text-md'>Generated images from imagify</motion.p>
        </motion.div>
    )
}

export default Header;