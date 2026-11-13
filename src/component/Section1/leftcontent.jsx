import React from 'react'
import Herotext from './Herotext'
import Arrow from './Arrow'



const leftcontent = () => {
  return (
<div className='w-full lg:w-1/3 h-auto lg:h-full flex flex-col justify-between gap-6 lg:gap-0'>     <Herotext />
     <Arrow/>
   
      </div> 

  )
}

export default leftcontent
