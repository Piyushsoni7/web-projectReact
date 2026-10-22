import React from 'react'
import Rightcardcontent from './Rightcardcontent'


const Rightcard = (props) => {
  return (
    <div className='h-full relative w-80 rounded-4xl overflow-hidden shrink-0'>
     <img className=' h-full w-full object-cover' src={props.img} alt="" />
      <Rightcardcontent tag={props.tag} id={props.id}/>
    </div>
  )
}

export default Rightcard
