import React from 'react'
import Title from './Title'
import GenerateButton from './GenerateButton'

const GenerateImg = () => {
  return (
    <div className='flex flex-col items-center mb-20'>
        <Title title={"See the magic, Try now"}/>
        <GenerateButton />
    </div>
  )
}

export default GenerateImg