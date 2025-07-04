import React from 'react'
import { stepsData } from '../assets/assets'
import Title from './Title'
import { motion } from 'framer-motion'

const Steps = () => {
    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='flex flex-col items-center justify-center my-32'>
            <Title title={"How it works"} description={"Transform Words Into Stunning Images"} />
            <div className='space-y-4 w-full max-w-3xl text-sm'>
                {stepsData.map((item, index) => (
                    <div key={index}
                        className='flex items-center gap-4 py-5 px-8 bg-white/20 shadow-md border cursor-pointer hover:scale-[1.02] hover:bg-blue-50 transition-all duration-300 rounded-lg'>
                        <img src={item.icon}
                            alt="icons"
                            width={40} />
                        <div>
                            <h2 className='text-xl font-medium '>{item.title}</h2>
                            <p className='text-gray-500'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Steps