import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const GenerateButton = () => {

    useGSAP(() => {
        gsap.fromTo(".button",
            {
                y:100,
                opacity:0,
                scale:1.2
            },
            {
                y:0,
                opacity:1,
                delay:0.2,
                duration:0.8,
                scale:1,
            }
        )
    },[])

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
        <button
            className='button sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full hover:scale-[1.04] transition-all duration-300'
            onClick={onClickHandler}
        >
            Generate Images
            <img src={assets.star_group} alt="star-group-icon" className='h-6' />
        </button>
    )
}

export default GenerateButton