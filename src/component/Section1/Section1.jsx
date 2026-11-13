import React from 'react'
import Navbar from './Navbar.jsx'
import Page1Content from './page1content.jsx'

const Section1 = (props) => {
  return (
   <div className='min-h-screen h-auto lg:h-screen w-full'>

      <Navbar />
      <Page1Content user={props.user}/>
      
    </div>
  )
}

export default Section1
