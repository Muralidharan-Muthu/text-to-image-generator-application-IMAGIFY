import React from 'react'
import Title from './Title'
import { testimonialsData } from '../assets/assets'
import Testimonial from './Testimonial'
import { motion } from 'framer-motion'

const Testimonials = () => {
    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='flex flex-col items-center justify-center my-24 p-6 py-12'>
            <Title
                title={"Customer testimonials"}
                description={"What Our Users Are Saying"}
                classNameDesc={'mb-12'}
            />
            <div className='flex flex-wrap gap-6'>
                {testimonialsData.map((item, index) =>
                    <Testimonial
                        key={index}
                        image={item.image}
                        name={item.name}
                        role={item.role}
                        stars={item.stars}
                        text={item.text}
                    />
                )}
            </div>
        </motion.div>
    )
}

export default Testimonials