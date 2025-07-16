import { assets } from '../assets/assets';
import GenerateButton from './GenerateButton';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react';


const Header = () => {

    const headerRef = useRef()
    const miniBoxRef = useRef()

    useGSAP(()=>{
        const boxes = gsap.utils.toArray(headerRef.current.children)
        const smallImages = gsap.utils.toArray(miniBoxRef.current.children)
        
        boxes.forEach((box,idx)=>{
            if (idx !== 5){
            gsap.fromTo(box,{
                y : 100,
                opacity:0.2,
            },{
                y:0,
                opacity:1,
                duration:1.5,
                delay:idx*0.2
            })}
        })

        smallImages.forEach((img,idx)=>{
            gsap.fromTo(img,{
                y : 100,
                opacity:0.2,
            },{
                y:0,
                opacity:1,
                duration:1.5,
                delay:idx*0.2,
                ease:"back.inOut"
            })
        })
        gsap.fromTo(
            ".last-chd",{
                y:100,
                opacity: 0
            },{
                y:0,
                opacity:1,
                delay:2.5,
                duration:1
            }
        )
    },[])
    

    return (
        <div ref={headerRef} className='flex flex-col items-center justify-center text-center my-20'>
            <div className='chd text-stone-500 inline-flex items-center text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
                <p>Best text to image generator</p>
                <img src={assets.star_icon} alt="star-icon" />
            </div>
            <h1 
                className='chd text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn text to <span className='text-blue-600'>image</span>, in seconds.</h1>
            <p className='chd text-center text-stone-700 max-w-xl mx-auto mt-5'>Unleash your creativity with AI. Turn your imagination into visual art in seconds - just type, and watch the magic happen.</p>
            <GenerateButton />
            <div ref={miniBoxRef} className='chd flex flex-wrap justify-center mt-16 gap-3'>
                {Array(6).fill('').map((_, index) => (
                    <img 
                        className='chd rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10'
                        src={index % 2 ? assets.sample_img_1 : assets.sample_img_2}
                        alt="sample-image"
                        key={index}
                        width={70} />
                ))}
            </div>
            <p className='last-chd mt-2 text-neutral-600 text-sm sm:text-md'
            >Generated images from imagify</p>
        </div>
    )
}

export default Header;