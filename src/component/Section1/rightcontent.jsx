import React from 'react'
import Rightcard from './Rightcard'

const rightcontent = (props) => {
  return (

<div id="right" className='w-full lg:w-2/3 h-auto lg:h-full rounded-2xl lg:rounded-4xl flex flex-nowrap gap-4 lg:gap-10 p-3 sm:p-5 lg:p-6 overflow-x-auto'>      
         {props.user.map(function(e,idx){
          return < Rightcard key={idx} id={idx} img={e.img} tag={e.tag}/>

         })}
    </div>
  )
}

export default rightcontent
