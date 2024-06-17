import React from 'react'
import Navigationbar from '../components/navbar'
import Contactform from '../components/contact'
import Abouts from '../components/about'
import Skills from '../components/skill'
import Projects from '../components/project'
import Footers from '../components/footer'

const Homepage = () => {
  return (
    <div className='bg-gray-600'>
      <Navigationbar/>
      <Abouts/>
      <Skills/>
      <Projects/>
      <Contactform/>
      <Footers/>
    </div>
  )
}

export default Homepage