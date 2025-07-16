import React from 'react'
import Header from '../components/Header'
import { assets } from '../assets/assets'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonials from '../components/Testimonials'
import GenerateImg from '../components/GenerateImg'
import ModelSection from '../components/ModelSection'

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <Description />
      <Testimonials />
      <GenerateImg />
      <ModelSection />
    </div>
  )
}

export default Home