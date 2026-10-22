import React from 'react'
import Rightcard from './Rightcard'

const rightcontent = (props) => {
  return (

    <div id="right" className ='h-full w-2/3 rounded-4xl flex flex-nowrap gap-10 p-6 overflow-x-auto'>
         {props.user.map(function(e,idx){
          return < Rightcard key={idx} id={idx} img={e.img} tag={e.tag}/>

         })}
    </div>
  )
}

export default rightcontent
