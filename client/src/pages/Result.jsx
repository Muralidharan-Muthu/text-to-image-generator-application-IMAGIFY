import React, { useState } from 'react'
import { assets } from "../assets/assets";
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const Result = () => {

  const [image, setImage] = useState(assets.sample_img_2)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState("")
  const { generateImage_ } = useContext(AppContext);

  const OnSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (input){
      const image = await generateImage_(input);
      if (image) {
        setIsImageLoaded(true);
        setImage(image);
      }
      setLoading(false);
      setInput("");
    }
    else{
      toast.error("Please enter a prompt to generate an image");
      setLoading(false);
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col min-h-90vh justify-center items-center'>
      <div>
        <div className='relative'>
          <img src={image}
            alt="sample_image"
            className='max-w-sm rounded'
          />
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`} />
        </div>

        {loading &&
          <p className='text-gray-600'>Loading...</p>
        }
      </div>
      {!isImageLoaded &&
        <div className='flex w-full max-w-full bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'>
          <input type="text"
            placeholder='Describe what you want to generate...'
            className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color'
            onChange={e => setInput(e.target.value)}
            value={input}
          />
          <button type='submit'
            className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full'
            onClick={(e) => {OnSubmitHandler(e)}}
          >
            Generate
          </button>
        </div>
      }
      {isImageLoaded &&
        <div className='flex gap-2 flex-wrap justify-center text-white test-sm p-0.5 mt-10 rounded-full'>
          <p onClick={() => { setIsImageLoaded(false) }} className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
          <a href={image}
            download
            className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'
          >Download</a>
        </div>
      }
    </motion.form>
  )
}

export default Result