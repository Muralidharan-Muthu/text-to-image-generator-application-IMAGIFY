import { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'

const Login = () => {

  const { setShowLogin } = useContext(AppContext)

  const [isSignedUp, setIsSignedUp] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div
      className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/10 flex justify-center items-center'>
      <motion.form
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='relative bg-white p-10 rounded-xl text-slate-500'>
        <h1 className='text-center text-2xl text-neutral-700 font-medium'>{isSignedUp ? "Login" : "Sign Up"}</h1>
        <p className='text-sm text-center'>Welcome back! Please sign in to continue</p>
        {!isSignedUp &&
          (<div className='border px-4 py-2 flex items-center gap-3 rounded-full mt-4'>
            <img width={30} src={assets.profile_icon} alt="profile-icon" />
            <input type='text' className='outline-none text-sm' placeholder='Full Name' required />
          </div>)
        }
        <div className='border px-6 py-2 flex items-center gap-4 rounded-full mt-4'>
          <img width={20} src={assets.email_icon} alt="profile-icon" />
          <input type='email' className='outline-none text-sm' placeholder='Email' required />
        </div>
        <div className='border px-6 py-2 flex items-center gap-4 rounded-full mt-4'>
          <img width={20} src={assets.lock_icon} alt="profile-icon" />
          <input type='password' className='outline-none text-sm' placeholder='Password' required />
        </div>
        <p className='text-sm text-blue-600 my-4 cursor-pointer text-center'>Forgot password?</p>
        <button className='bg-blue-600 w-full text-white py-2 rounded-full'>{isSignedUp ? "Login" : "Create account"}</button>
        {isSignedUp ?
          <p className='mt-5 text-center'>don't have an account? <span onClick={() => setIsSignedUp(false)} className='text-blue-600 cursor-pointer'>Sign Up</span></p>
          : <p className='mt-5 text-center'>already have an account? <span onClick={() => setIsSignedUp(true)} className='text-blue-600 cursor-pointer'>Login</span></p>
        }
        <img className='absolute top-5 right-5 cursor-pointer' onClick={() => { setShowLogin(false) }} src={assets.cross_icon} alt="close-icon" />
      </motion.form>
    </div>
  )
}

export default Login