import React from 'react'
import Title from './Title'
import GenerateButton from './GenerateButton'
import { motion } from 'framer-motion'

const GenerateImg = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center mb-20'>
      <Title title={"See the magic, Try now"} />
      <GenerateButton />
    </motion.div>
  )
}

export default GenerateImg